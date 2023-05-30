function somar() {
    let res = document.getElementById('res')
    let numero1 = prompt('Digite um número:')
    let numero2 = prompt('Digite outro número:')
    let newNumero1 = Number(numero1)
    let newNumero2 = Number(numero2)
    let soma = newNumero1 + newNumero2
    res.innerHTML = `A soma entre ${numero1} e ${numero2} é igual a ${soma}`
}