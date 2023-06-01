// Passos para criar uma função para acertar um numero random
// passo 1: criar uma função random
// passo 2: usar async e await para esperar o valor escolido no random
// passo 3: testar se é um numero
// passo 4: testar se o valor e maior ou menos ou é o certo

let random;

function gerar() {
  random = parseInt(Math.random(1) * 10);
  let teste = document.getElementById("but");
  let gerar = document.getElementById("gerar");
  let Inputnumero = document.getElementById("numero");

  teste.style.display = "inline";
  gerar.style.display = "none";
  Inputnumero.readOnly = false;

  console.log(random);
}

function escolha() {
  let Inputnumero = document.getElementById("numero");
  let teste = document.getElementById("but");
  let num = Number(Inputnumero.value);
  let butgerar = document.getElementById("gerar");

  num > random
    ? alert(`Errou, ${num} é maior do que o numero random`)
    : (err) => {
        console.log(err);
      };
  num < random
    ? alert(`Errou, ${num} é menor do que o numero random`)
    : (err) => {
        console.log(err);
      };
  if (num === random) {
    alert("Acertou");
    const retorno = confirm("Tentar denovo?");
    if (retorno === true) {
      alert("Clique em gerar denovo");
      butgerar.style.display = "inline";
      teste.style.display = "none";
    }
  }
}
