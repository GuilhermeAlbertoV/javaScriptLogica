var dados1 = document.getElementById('opera1')
var dados2 = document.getElementById('opera2')
var teste = document.getElementsByTagName('div')
var resultado = document.getElementsByTagName('h3')[1]

var botaoOpera = document.getElementById('operation')
var botaoPlus = document.getElementById('adc')

var botaoMinus = document.getElementById('minus')
var botaoSlash = document.getElementById('di')
var botaoAsterisk = document.getElementById('mul')

function sumir() {
    botaoPlus.style.display = 'none'
    botaoMinus.style.display = 'none'
    botaoSlash.style.display = 'none'
    botaoAsterisk.style.display = 'none'
}

function mostrar() {
    botaoPlus.style.display = 'inline'
    botaoMinus.style.display = 'inline'
    botaoSlash.style.display = 'inline-block'
    botaoAsterisk.style.display = 'inline-block'
}

function plus() {
    var n1 = Number(dados1.value)
    var n2 = Number(dados2.value)
    var soma = n1 + n2
    resultado.innerHTML = `O resultado de ${n1} + ${n2} é igual a ${soma}`
}

function minus() {
    var n1 = Number(dados1.value)
    var n2 = Number(dados2.value)
    var soma = Math.abs(n1 - n2)
    resultado.innerHTML = `O resultado de ${n1} - ${n2} é igual a ${soma}`
}
function slash() {
    var n1 = Number(dados1.value)
    var n2 = Number(dados2.value)
    var soma = n1 / n2
    resultado.innerHTML = `O resultado de ${n1} / ${n2} é igual a ${soma}`
}
function asterisk() {
    var n1 = Number(dados1.value)
    var n2 = Number(dados2.value)
    var soma = n1 * n2
    resultado.innerHTML = `O resultado de ${n1} * ${n2} é igual a ${soma}`
}