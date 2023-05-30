var input1 = document.getElementById('dados1')
var input2 = document.getElementById('dados2')

var div = document.getElementById('show')

function calcular() {
    var n1 = Number(input1.value)
    var n2 = Number(input2.value)
    var radOperation = document.getElementsByName('operation')

    if (n1 == '' || n2 == '') {
        alert('[ERROR] Digite algum número nas caixas de número')
    } else {
        if (radOperation[0].checked) {
            var soma = n1 + n2
            div.innerHTML = ` O calculo de ${n1} + ${n2} é ${soma}`
        } else if (radOperation[1].checked) {
            var soma = Math.abs(n1 - n2)
            div.innerHTML = `O calculo de ${n1} - ${n2} é ${soma}`
        } else if (radOperation[2].checked) {
            var soma = n1 * n2
            div.innerHTML = `O calculo de ${n1} * ${n2} é ${soma}`
        } else if (radOperation[3].checked) {
            var soma = n1 / n2
            div.innerHTML = `O calculo de ${n1} / ${n2} é ${soma}`
        }
    }

}