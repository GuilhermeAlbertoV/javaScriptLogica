function fatorial() {

    let num = document.getElementById('num')
    let res = document.getElementById('res')

    let valor = Number(num.value)
    let fator = 1
    function fatorar(n) {
        for (fator; n > 1; n--) {
            res.innerHTML += ` ${n} x`
            fator *= n
        }
        res.innerHTML += ` 1 = ${fator.toLocaleString('pt-br')}`
    }

    fatorar(valor)

}