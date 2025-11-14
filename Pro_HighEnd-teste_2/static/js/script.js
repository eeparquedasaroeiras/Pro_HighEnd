window.produtos = window.produtos || [];

// --- Helpers: criar card e renderizar lista genérica ---
function createProductCard(produto) {
  const card = document.createElement("div");
  // manter compatibilidade com estilos que esperam ".card" ou ".produto"
  card.className = "card produto";
  // guarda o id/categoria no dataset do card para acesso fácil
  card.dataset.prodId = produto.id;
  card.dataset.categoria = produto.categoria || '';
  card.innerHTML = `
    <img src="${produto.imagens[0]}" alt="${produto.nome}" class="card-main-img" />
    <h3 class="card-title">${produto.nome}</h3>
    <p class="short-description">${produto.descricaoCurta || ''}</p>
    <p class="price">${produto.preco || ''}</p>
    <button class="btn-ver-detalhes" data-prod-id="${produto.id}">Ver Detalhes</button>
  `;
  // clique no card (fora do botão) abre a overlay (mantém comportamento atual)
  card.addEventListener("click", (e) => {
    if (!e.target.closest("button")) {
      openGhostPage(produto);
    }
  });
  return card;
}

function renderListInContainer(containerEl, listaProdutos = []) {
  if (!containerEl) return;
  containerEl.innerHTML = '';
  if (!listaProdutos.length) {
    containerEl.innerHTML = '<p class="empty">Nenhum produto disponível.</p>';
    return;
  }
  listaProdutos.forEach(prod => containerEl.appendChild(createProductCard(prod)));
}

// --- Função principal de filtragem e renderização ---
function filterAndRenderByCategory(categoria) {
  const all = window.produtos || [];
  const categoriaNormalizada = String(categoria || '').toLowerCase().trim();

  const filtrados = all.filter(p => {
    if (categoriaNormalizada === "") return true; // Se a categoria for vazia, mostra todos
    return String((p.categoria || '')).toLowerCase().trim() === categoriaNormalizada;
  });

  // A função mostrarProdutos é a que renderiza a lista principal de produtos
  mostrarProdutos(filtrados);
}

// --- Funções de renderização (mantidas do seu código original) ---
function mostrarProdutos(lista) {
  const container = document.getElementById("listaProdutos");
  if (!container) {
    console.error("Elemento com id 'listaProdutos' não encontrado. Verifique seu HTML.");
    return;
  }

  // Limpa de forma eficiente
  container.innerHTML = "";

  if (!Array.isArray(lista) || lista.length === 0) {
    container.innerHTML = '<p class="empty">Nenhum produto disponível.</p>';
    return;
  }

  // Reutiliza a função createProductCard — evita duplicação de markup e garante consistência
  const fragment = document.createDocumentFragment();
  lista.forEach(produto => fragment.appendChild(createProductCard(produto)));
  container.appendChild(fragment);
}

// Mostrar todos no início (garantir uso de window.produtos)
// **NOTA**: Se você estiver usando um framework como Django (baseado no seu HTML), 
// garanta que `window.produtos` seja populado antes deste script rodar.
// mostrarProdutos(window.produtos || []);

// Inicialização e listeners que dependem do DOM e de outras funções
document.addEventListener("DOMContentLoaded", () => {
  // Evento de clique nas categorias: liga o clique ao <a> para evitar navegação
  // e extrai a categoria de forma robusta (data-categoria, ?categoria=href ou texto do h3)
  document.querySelectorAll(".category-item a").forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      // evita que o link abra outra página — queremos filtrar no cliente
      e.preventDefault();

      // 1. Tenta extrair do atributo data-categoria (melhor prática)
      let categoria = anchor.dataset.categoria || null;

      // 2. Se não encontrou, tenta extrair do texto do h3 (fallback)
      if (!categoria) {
        const h3 = anchor.querySelector('h3');
        if (h3) categoria = h3.textContent.trim();
      }
      
      // 3. Se ainda não encontrou, tenta extrair do href (se estiver no formato ?categoria=...)
      if (!categoria) {
        const href = anchor.getAttribute('href') || '';
        try {
          const url = new URL(href, window.location.href);
          categoria = url.searchParams.get('categoria');
        } catch (err) {
          // href pode ser relativo ou inválido — ignoramos
        }
      }

      // Chama a função de filtro e renderização
      filterAndRenderByCategory(categoria);
    });
  });
});

// **NOTA SOBRE O PROBLEMA html()**
// O problema que você mencionou com `html()` provavelmente estava relacionado a:
// 1. O seletor do container de produtos estar incorreto (ex: `document.getElementById('listaProdutos')` não existia).
// 2. A lógica de filtro não estar chamando a função de renderização corretamente.
// 3. A função `mostrarProdutos` estar usando `innerHTML = ""` (que é o correto para limpar), mas a lista de produtos (`window.produtos`) não estava populada ou acessível.
// O código acima usa `mostrarProdutos(filtrados)` que internamente usa `container.innerHTML = "";` para limpar e depois renderizar os novos produtos.
// Garanta que o container `<div id="listaProdutos"></div>` exista no seu HTML onde os produtos devem ser exibidos.