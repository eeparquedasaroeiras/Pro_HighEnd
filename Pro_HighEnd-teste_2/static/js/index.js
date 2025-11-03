// declare uma flag no topo do arquivo (acima de todas as funções)
let overlayActivatedCart = false;

// Garantir que exista a variável global `produtos` (fallback vazio)
window.produtos = window.produtos || [];

// --- Seletores de elementos ---
const imagem = document.getElementById("imagem-produto");
const featuredContainer = document.getElementById("featuredProductsContainer");
// container para a lista completa (produtos.html)
const featuredProducts = document.getElementById("featuredProductsTodos");
const barraPesquisa = document.getElementById("barraPesquisa");
const suggestions = document.getElementById("suggestions");
const MeuCarr = document.getElementById("MeuCarr");
const Carrinho = document.getElementById("carrinho");
// -------------------
// Lógica do carrinho
// -------------------
const CART_KEY = 'prohighend_cart_v1';

function parsePrice(precoStr) {
  if (typeof precoStr === 'number') return precoStr;
  if (!precoStr) return 0;
  // Remove tudo exceto dígitos, vírgula e ponto
  const cleaned = String(precoStr).replace(/[^0-9,\.]/g, '').trim();
  // Troca vírgula por ponto para parseFloat funcionar
  const normalized = cleaned.replace(/,/g, '.');
  const v = parseFloat(normalized);
  return isNaN(v) ? 0 : v;
}

function formatPrice(num) {
  return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const Cart = {
  data: { items: [] },
  load() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      this.data = raw ? JSON.parse(raw) : { items: [] };
    } catch (e) {
      console.error('Erro ao carregar carrinho:', e);
      this.data = { items: [] };
    }
  },
  save() {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.error('Erro ao salvar carrinho:', e);
    }
  },
  getItems() { return this.data.items; },
  totalItems() { return this.data.items.reduce((s, it) => s + (it.qty||0), 0); },
  totalPrice() { return this.data.items.reduce((s, it) => s + (parseFloat(it.price) * (it.qty||0)), 0); },
  add(prod, qty = 1) {
    if (!prod || !prod.id) return;
    const id = prod.id;
    const existing = this.data.items.find(i => i.id === id);
    const priceNum = parsePrice(prod.preco || prod.price || 0);
    if (existing) {
      existing.qty = (existing.qty || 0) + qty;
    } else {
      this.data.items.push({
        id,
        nome: prod.nome || prod.name || 'Produto',
        price: priceNum,
        priceText: prod.preco || prod.price || formatPrice(priceNum),
        imagem: (prod.imagens && prod.imagens[0]) || '',
        qty: qty
      });
    }
    this.save();
  },
  remove(id) {
    this.data.items = this.data.items.filter(i => i.id !== id);
    this.save();
  },
  updateQty(id, qty) {
    const it = this.data.items.find(i => i.id === id);
    if (!it) return;
    it.qty = Math.max(0, Math.floor(qty));
    if (it.qty === 0) this.remove(id);
    this.save();
  },
  clear() {
    this.data.items = [];
    this.save();
  }
};

function renderCart() {
  if (!MeuCarr) return;
  const listEl = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!listEl || !totalEl) return;

  listEl.innerHTML = '';
  const items = Cart.getItems();
  if (!items.length) {
    listEl.innerHTML = '<li class="cart-empty">Seu carrinho está vazio.</li>';
    totalEl.textContent = formatPrice(0);
    return;
  }

  items.forEach(it => {
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.dataset.id = it.id;
    li.innerHTML = `
      <img src="${it.imagem || ''}" alt="${it.nome}" class="cart-thumb" />
      <div class="cart-meta">
        <div class="cart-name">${it.nome}</div>
        <div class="cart-price">${formatPrice(it.price)}</div>
      </div>
      <div class="cart-qty">
        <button class="qty-decrease" aria-label="Diminuir">-</button>
        <input class="qty-input" type="number" min="1" value="${it.qty}" />
        <button class="qty-increase" aria-label="Aumentar">+</button>
      </div>
      <div class="cart-sub">${formatPrice(it.price * it.qty)}</div>
      <button class="cart-remove" aria-label="Remover">×</button>
    `;

    // listeners (stop propagation so document click handler não fecha o painel ao re-renderizar)
    li.querySelector('.cart-remove')?.addEventListener('click', (e) => {
      e.stopPropagation();
      Cart.remove(it.id);
      renderCart();
    });

    li.querySelector('.qty-decrease')?.addEventListener('click', (e) => {
      e.stopPropagation();
      Cart.updateQty(it.id, (it.qty || 1) - 1);
      Cart.load(); renderCart();
    });

    li.querySelector('.qty-increase')?.addEventListener('click', (e) => {
      e.stopPropagation();
      Cart.updateQty(it.id, (it.qty || 0) + 1);
      Cart.load(); renderCart();
    });

    const qtyInput = li.querySelector('.qty-input');
    if (qtyInput) {
      qtyInput.addEventListener('change', (e) => {
        e.stopPropagation();
        const v = parseInt(e.target.value) || 0;
        Cart.updateQty(it.id, v);
        Cart.load(); renderCart();
      });
    }

    listEl.appendChild(li);
  });

  totalEl.textContent = formatPrice(Cart.totalPrice());
}

// Expor controle simples ao resto do arquivo
window.ProHighEndCart = { Cart, renderCart };
// Carregar carrinho ao início
Cart.load();
/////////////////////////////////////////////////////////
function renderProdutos() {
  if (!featuredProducts) return;

  const lista = window.produtos || [];
  if (!lista.length) {
    featuredProducts.innerHTML = '<p class="empty">Nenhum produto disponível.</p>';
    return;
  }

  featuredProducts.innerHTML = "";

  lista.slice(0, 90).forEach((produto) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${produto.imagens[0]}" alt="${produto.nome}" class="card-main-img" />
      <h3>${produto.nome}</h3>
      <p class="short-description">${produto.descricaoCurta}</p>
      <p class="price">${produto.preco}</p>
      <button class="btn-ver-detalhes" data-prod-id="${produto.id}">Ver Detalhes</button>
    `;

    // Clique no card (fora do botão) abre a overlay
    card.addEventListener("click", (e) => {
      if (!e.target.closest("button")) {
        openGhostPage(produto);
      }
    });

    featuredProducts.appendChild(card);
  });
}
/////////////////////////////////////////////////////////
// --- Renderiza produtos em destaque ---
function renderProdutosEmDestaque() {
  if (!featuredContainer) return;

  const lista = window.produtos || [];
  if (!lista.length) {
    featuredContainer.innerHTML = '<p class="empty">Nenhum produto disponível.</p>';
    return;
  }

  featuredContainer.innerHTML = "";

  lista.slice(0, 9).forEach((produto) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${produto.imagens[0]}" alt="${produto.nome}" class="card-main-img" />
      <h3>${produto.nome}</h3>
      <p class="short-description">${produto.descricaoCurta}</p>
      <p class="price">${produto.preco}</p>
      <button class="btn-ver-detalhes" data-prod-id="${produto.id}">Ver Detalhes</button>
    `;

    // Clique no card (fora do botão) abre a overlay
    card.addEventListener("click", (e) => {
      if (!e.target.closest("button")) {
        openGhostPage(produto);
      }
    });

    featuredContainer.appendChild(card);
  });
}

// --- Delegação para botões (garante funcionamento para elementos dinâmicos) ---
function setupDelegation() {
  if (!featuredContainer) return;

  featuredContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-ver-detalhes');
    if (!btn) return;

    e.stopPropagation(); // evita o clique subir para o card
    const prodId = btn.dataset.prodId;
    const produto = (window.produtos || []).find(p => p.id === prodId);
    if (produto) openGhostPage(produto);
    else console.warn('Produto não encontrado para id:', prodId);
  });
}

// --- Ghost page (overlay) ---
function openGhostPage(produto) {
  // remover overlay existente, se houver
  const existing = document.getElementById('ghost-page-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'ghost-page-overlay';
  overlay.className = 'ghost-overlay';

  overlay.innerHTML = `
    <div class="container-ghost">
      <button class="ghost-close" aria-label="Fechar">✕</button>
      <div class="ghost-left">
        <img src="${produto.imagens[0]}" alt="${produto.nome}" class="ghost-main-img" />
        <div class="ghost-thumbs">
          ${produto.imagens.map(src => `<img src="${src}" class="ghost-thumb" />`).join('')}
        </div>
      </div>
      <div class="ghost-right">
        <h2>${produto.nome}</h2>
        <p class="ghost-price">${produto.preco}</p>
        <p class="ghost-desc">${produto.descricaoCurta}</p>
       
        <button class="buy-button ghost-buy">Adicionar</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.classList.add('no-scroll');

  // Ativa o carrinho quando abrir o overlay, mas só se ainda não estiver aberto
  if (typeof MeuCarr !== 'undefined' && MeuCarr) {
    if (!MeuCarr.classList.contains('ligado')) {
      MeuCarr.classList.add('ligado');
      overlayActivatedCart = true; // sabemos que fomos nós que ativamos
    } else {
      overlayActivatedCart = false; // já estava aberto, não mexeremos ao fechar
    }
  }

  history.pushState({ ghost: produto.id }, '', produto.pagina || '#');

  // eventos do overlay
  const closeBtn = overlay.querySelector('.ghost-close');
  if (closeBtn) closeBtn.addEventListener('click', closeGhostPage);
////////////////////////////////////////////////////////////////
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeGhostPage();
  });
/////////////////////////////////////////////////////////////////
  overlay.querySelectorAll('.ghost-thumb').forEach(thumb => {
    thumb.addEventListener('click', (ev) => {
      const main = overlay.querySelector('.ghost-main-img');
      if (main) main.src = ev.target.src;
    });
  });

  // quantity controls inside overlay
  const qtyInput = overlay.querySelector('.qty-input');
  overlay.querySelectorAll('.qty-decrease').forEach(btn => btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!qtyInput) return;
    const v = Math.max(1, parseInt(qtyInput.value || '1') - 1);
    qtyInput.value = v;
  }));
  overlay.querySelectorAll('.qty-increase').forEach(btn => btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!qtyInput) return;
    const v = Math.max(1, parseInt(qtyInput.value || '1') + 1);
    qtyInput.value = v;
  }));

  // Botão adicionar -> adiciona ao carrinho e abre o painel
  const buyBtn = overlay.querySelector('.ghost-buy');
  if (buyBtn) {
    buyBtn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const q = qtyInput ? Math.max(1, parseInt(qtyInput.value || '1')) : 1;
      try {
        Cart.add(produto, q);
        Cart.load();
        renderCart();
      } catch (err) {
        console.error('Erro ao adicionar no carrinho:', err);
      }

      // garantir que o painel do carrinho esteja aberto
      if (MeuCarr && !MeuCarr.classList.contains('ligado')) {
        MeuCarr.classList.add('ligado');
        overlayActivatedCart = true;
      }

  // manter overlay aberta após adicionar (não fechar)
  // (o carrinho foi atualizado acima com renderCart())
    });
  }
}
  
function closeGhostPage() {
  const overlay = document.getElementById('ghost-page-overlay');
  if (overlay) overlay.remove();
  document.body.classList.remove('no-scroll');

  // Se nós ativamos o carrinho ao abrir overlay, desativamos ao fechar
  if (overlayActivatedCart && typeof MeuCarr !== 'undefined' && MeuCarr) {
    MeuCarr.classList.remove('ligado');
    overlayActivatedCart = false;
  }

  if (history.state && history.state.ghost) history.back();
}

window.addEventListener('popstate', (event) => {
  const overlay = document.getElementById('ghost-page-overlay');
  if (overlay && (!event.state || !event.state.ghost)) {
    overlay.remove();
    document.body.classList.remove('no-scroll');
  }
});

// --- Busca / sugestões (mantive sua lógica, apenas usando window.produtos) ---
function filtrarProdutos(query) {
  const lista = window.produtos || [];
  if (!query) return lista;
  return lista.filter(p =>
    p.nome.toLowerCase().includes(query.toLowerCase()) ||
    (p.descricaoCurta && p.descricaoCurta.toLowerCase().includes(query.toLowerCase())) ||
    (p.categoria && p.categoria.toLowerCase().includes(query.toLowerCase()))
  );
}

function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, `<span class="highlight">$1</span>`);
}

function renderSuggestions(query) {
  if (!suggestions) return;
  suggestions.innerHTML = "";
  if (!query) { suggestions.style.display = "none"; return; }

  const filtrados = filtrarProdutos(query);
  if (!filtrados.length) { suggestions.style.display = "none"; return; }

  filtrados.forEach(prod => {
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.innerHTML = highlightMatch(prod.nome, query);
    div.addEventListener("click", () => { openGhostPage(prod); });
    suggestions.appendChild(div);
  });

  suggestions.style.display = "block";
}

// --- Inicialização ---
document.addEventListener("DOMContentLoaded", () => {
  setupDelegation();
  // Render both lists if their containers exist. renderProdutos will no-op when
  // `featuredProducts` is not present on the page.
  renderProdutosEmDestaque();
  renderProdutos();
  // renderizar carrinho salvo
  renderCart();

  if (barraPesquisa) {
    barraPesquisa.addEventListener("input", (e) => {
      renderSuggestions(e.target.value.trim());
    });

    document.addEventListener("click", (e) => {
      if (suggestions && !suggestions.contains(e.target) && e.target !== barraPesquisa)
        suggestions.style.display = "none";
    });
  }

  // Carrinho: proteger se elementos faltarem
  if (Carrinho && MeuCarr) {
    Carrinho.addEventListener("click", (e) => {
      e.stopPropagation();
      MeuCarr.classList.toggle("ligado");
    });
   
    // Ações do carrinho (esvaziar / checkout)
    const cartClearBtn = document.getElementById('cart-clear');
    const cartCheckoutBtn = document.getElementById('cart-checkout');
    if (cartClearBtn) {
      cartClearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        Cart.clear();
        Cart.load();
        renderCart();
      });
    }
    if (cartCheckoutBtn) {
      cartCheckoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        // fluxo simples: para demo apenas mostramos um resumo
        if (Cart.totalItems() === 0) {
          alert('Seu carrinho está vazio.');
          return;
        }
        const total = formatPrice(Cart.totalPrice());
        alert(`Resumo do pedido:\nItens: ${Cart.totalItems()}\nTotal: ${total}\n(Implementar checkout real no servidor)`);
      });
    }

    document.addEventListener("click", (event) => {
      if (MeuCarr.classList.contains("ligado")) {
        if (!MeuCarr.contains(event.target) && !Carrinho.contains(event.target) && !document.getElementById('ghost-page-overlay')) {
          MeuCarr.classList.remove("ligado");
        }
      }
    });
  }
});
