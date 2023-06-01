// sequencia de passos para saber as horas trabalhadas
// passo 1: obter o salario mensal e a quantidade de horas trabalhadas
// passo 2: receber apenas numeros e dispensar valores vazios
// passo 3: dividir os valores mensal e quantidade de horas para saber as quantidade ganha por hora
// passo 4: exibir o resultado

function salario() {
  let Inputsalario = document.getElementById("salario");
  let Inputhora = document.getElementById("hora");

  let salario = Number(Inputsalario.value);
  let hora = Number(Inputhora.value);

  if (salario || hora === Number) {
    let salariohora = salario / hora;
    alert(
      `você ganha ${salariohora.toLocaleString("PT-BR", {
        style: "currency",
        currency: "BRL",
      })} por hora`
    );
  } else {
    alert("Erro: somente números são aceitos");
    Inputsalario.value = "";
    Inputhora.value = "";
  }
}
