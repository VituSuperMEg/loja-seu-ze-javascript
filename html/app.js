
// Primeira Parte

const root = document.querySelector("#root");


/* 
 Final da Aula parte da criação de inserção de items ao carrinho
*/
const cart = [];
const carrinho = document.querySelector("#carrinho");
carrinho.innerHTML = "";

function addCart(item) {
  cart.push(item);
  carrinho.innerHTML = cart.length;
}

// Primeira Parte 
document.addEventListener("DOMContentLoaded", () => {

  // api feita em bun
  const api = "http://localhost:3333/itens";

  // Obter os itens 
  function getItens() {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const card = document.createElement("div");
        card.innerHTML = "";
        card.classList = "container";

        data.forEach((i) => {
          const container = document.createElement("div");
          container.innerHTML = "";
          container.classList = "card";

          const nome = document.createElement("h2");
          const imagem = document.createElement("img");
          const preco = document.createElement("p");
          const desconto = document.createElement("span");
          const precoDesconto = document.createElement("section");

          // Parte Final
          const button = document.createElement("button");

          button.innerHTML = "Adicionar ao carrinho";
          let btnEstilo =
            "background : #3b82f6; width: 100%; border : none; padding: 10px; color: #fff; font-weight: bold; border-radius : 6px; margin-top : 5px;cursor: pointer"
          button.style.cssText = btnEstilo;
          // Parte Final
          precoDesconto.innerHTML = "";
          precoDesconto.classList = "precoDesconto";

          nome.textContent = `${i.nome}`;
          preco.textContent = `R$ ${i.preco} - `;
          // CSS Pelo JavaScript
          preco.style.fontSize = "30px";
          desconto.textContent = `Desconto - ${i.desconto}`;
          // CSS Pelo JavaScript
          desconto.style.color = "#22c55e";
          imagem.src = i.imagem;

          precoDesconto.append(preco);
          precoDesconto.append(desconto);
          container.append(nome);
          container.append(precoDesconto);
          container.append(imagem);

          // Parte Final
          container.append(button);
          button.addEventListener("click", () => addCart(i));

          // Pai
          card.appendChild(container);
        });

        root.append(card);
      })
      .catch((error) =>
        console.error("Erro ao obter a lista de compras:", error)
      );
  }
  getItens();
});
