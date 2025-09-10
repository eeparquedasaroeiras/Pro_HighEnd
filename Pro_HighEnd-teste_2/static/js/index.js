
// --- Seletores de elementos ---
const imagem = document.getElementById("imagem-produto");
const featuredContainer = document.getElementById("featuredProductsContainer");
const barraPesquisa = document.getElementById("barraPesquisa");
const suggestions = document.getElementById("suggestions");
let MeuCarr = document.getElementById("MeuCarr");
let Carrinho = document.getElementById("carrinho");
  
  // --- Renderiza produtos em destaque ---
  function renderProdutosEmDestaque() {
    if (!featuredContainer) return;
  
    featuredContainer.innerHTML = "";
  
    produtos.slice(0, 10).forEach(produto => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <img src="${produto.imagens[0]}" alt="${produto.nome}" class="card-main-img" />
        <h3>${produto.nome}</h3>
        <p class="short-description">${produto.descricaoCurta}</p>
        <p class="price">${produto.preco}</p>
        <button onclick="window.location.href='${produto.pagina}'">Ver Detalhes</button>
      `;
  
      card.addEventListener("click", (e) => {
        if (!e.target.closest("button")) {
          window.location.href = produto.pagina;
        }
      });
  
      featuredContainer.appendChild(card);
    });
  }
  
  // --- Filtra produtos com base na busca ---
  function filtrarProdutos(query) {
    if (!query) return produtos;
    return produtos.filter(p =>
      p.nome.toLowerCase().includes(query.toLowerCase()) ||
      p.descricaoCurta.toLowerCase().includes(query.toLowerCase()) ||
      p.categoria.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  // --- Destaca o texto da busca ---
  function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, `<span class="highlight">$1</span>`);
  }
  
  // --- Mostra sugestões de produtos ---
  function renderSuggestions(query) {
    if (!suggestions) return;
  
    suggestions.innerHTML = "";
    if (!query) {
      suggestions.style.display = "none";
      return;
    }
  
    const filtrados = filtrarProdutos(query);
    if (!filtrados.length) {
      suggestions.style.display = "none";
      return;
    }
  
    filtrados.forEach(prod => {
      const div = document.createElement("div");
      div.className = "suggestion-item";
      div.innerHTML = highlightMatch(prod.nome, query);
  
      div.addEventListener("click", () => {
        window.location.href = prod.pagina;
      });
  
      suggestions.appendChild(div);
    });
  
    suggestions.style.display = "block";
  }
  
  // --- Inicialização ao carregar ---
  document.addEventListener("DOMContentLoaded", () => {
    renderProdutosEmDestaque();
  
    if (barraPesquisa) {
      barraPesquisa.addEventListener("input", (e) => {
        const val = e.target.value.trim();
        renderSuggestions(val);
      });
  
      document.addEventListener("click", (e) => {
        if (!suggestions.contains(e.target) && e.target !== barraPesquisa) {
          suggestions.style.display = "none";
        }
      });
    }
  });

// Abrir/fechar carrinho ao clicar no ícone
Carrinho.addEventListener("click", function (e) {
  e.stopPropagation(); // impede o clique de se propagar
  MeuCarr.classList.toggle("ligado");
});

// Fechar ao clicar fora do carrinho
document.addEventListener("click", function (event) {
  // Só fecha se o carrinho estiver aberto
  if (MeuCarr.classList.contains("ligado")) {
    // Se o clique não for dentro do carrinho e nem no ícone
    if (!MeuCarr.contains(event.target) && !Carrinho.contains(event.target)) {
      MeuCarr.classList.remove("ligado");
    }
  }
});

