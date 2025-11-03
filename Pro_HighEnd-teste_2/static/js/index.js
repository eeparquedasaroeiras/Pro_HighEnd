// declare uma flag no topo do arquivo (acima de todas as funções)
let overlayActivatedCart = false;

// Garantir que exista a variável global `produtos` (fallback vazio)
window.produtos = window.produtos || [];

// --- Seletores de elementos ---
const imagem = document.getElementById("imagem-produto");
const featuredContainer = document.getElementById("featuredProductsContainer");
const featuredProducts = document.getElementById("featuredProductsContainer");
const barraPesquisa = document.getElementById("barraPesquisa");
const suggestions = document.getElementById("suggestions");
const MeuCarr = document.getElementById("MeuCarr");
const Carrinho = document.getElementById("carrinho");
/////////////////////////////////////////////////////////
function renderProdutos() {
  if (!featuredProducts) return;

  const lista = window.produtos || [];
  if (!lista.length) {
    featuredProducts.innerHTML = '<p class="empty">Nenhum produto disponível.</p>';
    return;
  }

  featuredProducts.innerHTML = "";

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
  renderProdutosEmDestaque();

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

    document.addEventListener("click", (event) => {
      if (MeuCarr.classList.contains("ligado")) {
        if (!MeuCarr.contains(event.target) && !Carrinho.contains(event.target) && !document.getElementById('ghost-page-overlay')) {
          MeuCarr.classList.remove("ligado");
        }
      }
    });
  }
});
