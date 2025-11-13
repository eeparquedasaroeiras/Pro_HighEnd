window.produtos = window.produtos || [];

// document.getElementById('botao').addEventListener('click', () => {
//   const categoriaEscolhida = document.getElementById('filtroCategoria').value;

//   const filtrados = produtos.filter(p => {
//     if (categoriaEscolhida === "") return true; // mostra todos
//     return p.categoria === categoriaEscolhida;  // só da categoria escolhida
//   });

//   console.log(filtrados);
// });


// const produtos = window.produtos || [];

// // Função pra mostrar os produtos na tela
// function mostrarProdutos(lista) {
//   const container = document.getElementById('listaProdutos');
//   container.innerHTML = ""; // limpa antes de mostrar

//   lista.forEach(p => {
//     const item = document.createElement('div');
//     item.classList.add('produto');
//     item.innerHTML = `
//       <h4>${p.nome}</h4>
//       <p>R$ ${p.preco}</p>
//       <p>${p.categoria}</p>
//     `;
//     container.appendChild(item);
//   });
// }

// // Mostra todos no início
// mostrarProdutos(produtos);

// // Evento de filtro
// document.getElementById('botao').addEventListener('click', () => {
//   const categoriaEscolhida = document.getElementById('filtroCategoria').value;

//   const filtrados = produtos.filter(p => {
//     if (categoriaEscolhida === "") return true;
//     return p.categoria === categoriaEscolhida;
//   });

//   mostrarProdutos(filtrados);
// });

function mostrarProdutos(lista) {
  const container = document.getElementById("listaProdutos");
  container.innerHTML = ""; // limpa o que já estava lá

  lista.forEach(produto => {
    const item = document.createElement("div");
    item.classList.add("produto");
    item.innerHTML = `
      <h4>${produto.nome}</h4>
      <p>R$ ${produto.preco}</p>
      <p>${produto.categoria}</p>
    `;
    container.appendChild(item);
  });
}

// Mostrar todos no início
mostrarProdutos(produtos);

// Evento de clique nas imagens
document.querySelectorAll(".category-item img").forEach(img => {
  img.addEventListener("click", () => {
    const categoria = img.getAttribute("data-categoria");

    const filtrados = produtos.filter(p => {
      if (categoria === "") return true;
      return p.categoria === categoria;
    });

    mostrarProdutos(filtrados);
  });
});