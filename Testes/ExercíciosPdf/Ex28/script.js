var InputQtde = document.getElementById("qtd");
var dia = document.getElementById("dia");
var select = document.getElementById("select");
var carr = document.getElementById("carrinho");

var qtd = InputQtde;

let Produtos = {
  Produto0: { Nome: "Ovo", valor: 5.0 },
  Produto1: { Nome: "Leite", valor: 6.5 },
  Produto2: { Nome: "Carne", valor: 10.0 },
  Produto3: { Nome: "Nescau", valor: 8.5 },
};

var diasSemana = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

var data = new Date();
var semana = data.getDay();

dia.innerHTML = diasSemana[semana];

function enviar() {
  if (InputQtde == 0 || InputQtde.value.length == 0) {
    alert("Insira a quantidade");
  } else {
    switch (semana) {
      case (semana = 0):
        if (select.value == "0") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto0.valor;
          let descontoDomingo = precoTotal * (0 / 100);
          let valorComDesconto = precoTotal - descontoDomingo;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto0.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "1") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto1.valor;
          let descontoDomingo = precoTotal * (0 / 100);
          let valorComDesconto = precoTotal - descontoDomingo;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto1.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "2") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto2.valor;
          let descontoDomingo = precoTotal * (0 / 100);
          let valorComDesconto = precoTotal - descontoDomingo;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto2.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "3") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto3.valor;
          let descontoDomingo = precoTotal * (0 / 100);
          let valorComDesconto = precoTotal - descontoDomingo;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto3.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else {
          alert("Produto inválido");
        }
        break;
      case (semana = 1):
        if (select.value == "0") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto0.valor;
          let descontoSegunda = precoTotal * (10 / 100);
          let valorComDesconto = precoTotal - descontoSegunda;
          valorComDesconto.toFixed(2);
          let valorQtde = descontoSegunda * qtde;
          let text = `Produto: ${
            Produtos.Produto0.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "1") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto1.valor;
          let descontoSegunda = precoTotal * (10 / 100);
          let valorComDesconto = precoTotal - descontoSegunda;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto1.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "2") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto2.valor;
          let descontoSegunda = precoTotal * (10 / 100);
          let valorComDesconto = precoTotal - descontoSegunda;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto2.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
          alert("ok");
        } else if (select.value == "3") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto3.valor;
          let descontoSegunda = precoTotal * (10 / 100);
          let valorComDesconto = precoTotal - descontoSegunda;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto3.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else {
          alert("Produto inválido");
        }
        break;
      case (semana = 2):
        if (select.value == "0") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto0.valor;
          let descontoTerca = precoTotal * (20 / 100);
          let valorComDesconto = Produtos.Produto0.valor - descontoTerca;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto0.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "1") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto1.valor;
          let descontoTerca = precoTotal * (20 / 100);
          let valorComDesconto = precoTotal - descontoTerca;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto1.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "2") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto2.valor;
          let descontoTerca = precoTotal * (20 / 100);
          let valorComDesconto = precoTotal - descontoTerca;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto2.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "3") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto3.valor;
          let descontoTerca = precoTotal * (20 / 100);
          let valorComDesconto = precoTotal - descontoTerca;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto3.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else {
          alert("Produto inválido");
        }

        break;
      case (semana = 3):
        if (select.value == "0") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto0.valor;
          let descontoQuarta = precoTotal * (25 / 100);
          let valorComDesconto = precoTotal - descontoQuarta;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto0.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "1") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto1.valor;
          let descontoQuarta = precoTotal * (25 / 100);
          let valorComDesconto = precoTotal - descontoQuarta;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto1.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "2") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto2.valor;
          let descontoQuarta = precoTotal * (25 / 100);
          let valorComDesconto = precoTotal - descontoQuarta;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto2.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "3") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto3.valor;
          let descontoQuarta = precoTotal * (25 / 100);
          let valorComDesconto = precoTotal - descontoQuarta;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto3.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else {
          alert("Produto inválido");
        }
        break;
      case (semana = 4):
        if (select.value == "0") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto0.valor;
          let descontoQuinta = precoTotal * (30 / 100);
          let valorQtde = descontoQuinta * qtde;
          valorComDesconto.toFixed(2);
          let text = `Produto: ${
            Produtos.Produto0.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "1") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto1.valor;
          let descontoQuinta = precoTotal * (30 / 100);
          let valorComDesconto = precoTotal - descontoQuinta;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto1.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "2") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto2.valor;
          let descontoQuinta = precoTotal * (30 / 100);
          valorComDesconto.toFixed(2);
          let valorComDesconto = precoTotal - descontoQuinta;
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto2.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "3") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto3.valor;
          let descontoQuinta = precoTotal * (30 / 100);
          let valorComDesconto = precoTotal - descontoQuinta;
          valorComDesconto.toFixed(2);
          let valorQtde = descontoQuinta * qtde;
          let text = `Produto: ${
            Produtos.Produto3.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else {
          alert("Produto inválido");
        }
        break;
      case (semana = 5):
        if (select.value == "0") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto0.valor;
          let descontoSexta = precoTotal * (45 / 100);
          valorComDesconto.toFixed(2);
          let valorComDesconto = precoTotal - descontoSexta;
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto0.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "1") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto1.valor;
          let descontoSexta = precoTotal * (45 / 100);
          let valorComDesconto = precoTotal - descontoSexta;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto1.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "2") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto2.valor;
          let descontoSexta = precoTotal * (45 / 100);
          let valorComDesconto = precoTotal - descontoSexta;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto2.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "3") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto3.valor;
          let descontoSexta = precoTotal * (45 / 100);
          let valorComDesconto = precoTotal - descontoSexta;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto3.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else {
          alert("Produto inválido");
        }
        break;
      case (semana = 6):
        if (select.value == "0") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto0.valor;
          let descontoSabado = precoTotal * (35 / 100);
          let valorComDesconto = precoTotal - descontoSabado;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto0.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "1") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto1.valor;
          let descontoSabado = precoTotal * (35 / 100);
          let valorComDesconto = precoTotal - descontoSabado;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto1.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "2") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto2.valor;
          let descontoSabado = precoTotal * (35 / 100);
          let valorComDesconto = precoTotal - descontoSabado;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto2.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else if (select.value == "3") {
          let qtde = InputQtde.value;
          let precoTotal = Produtos.Produto3.valor;
          let descontoSabado = precoTotal * (35 / 100);
          let valorComDesconto = precoTotal - descontoSabado;
          valorComDesconto.toFixed(2);
          let valorQtde = valorComDesconto * qtde;
          let text = `Produto: ${
            Produtos.Produto.Nome
          }  | Qtde: ${qtde}   | Valorfim: ${valorQtde.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })} `;
          let p1 = document.createElement("p");
          p1.textContent = text;
          carr.appendChild(p1);
          console.log(text);
        } else {
          alert("Produto inválido");
        }
        break;
      default:
        alert("error");
        break;
    }
  }
}
