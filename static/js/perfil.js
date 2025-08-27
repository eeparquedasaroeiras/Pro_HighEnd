
const imagem = document.getElementById("imagem-produto");
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const barraPesquisa = document.getElementById("barraPesquisa");
  const suggestions = document.getElementById("suggestions");
  
  const featuredContainer = document.getElementById("featuredProductsContainer");

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
imagem.addEventListener("click", function () {
  window.location.href = "index.html";
  });