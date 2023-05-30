// Exemplo de função básica

/*
let valor = 20

function incrementa() {
    valor += 30
}
incrementa()
console.log(valor)
*/

// Exemplo de função com parâmetro

function calculo(n1, n2) {
    const adicao = n1 + n2
    const subtracao = adicao - 5
    const multiplicacao = subtracao * 10
    const divisao = multiplicacao / 2
    const valortotal = divisao
    return valortotal
}
const minhasoma = calculo(2, 5) // 10
const minhasoma2 = calculo(2, 8)

console.log(minhasoma)
console.log(minhasoma2)
