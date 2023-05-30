function valor() {

    let res = document.getElementById('res')
    let tabu = document.getElementById('num')
    let valor = tabu.value

    res.innerHTML = `Tabuada do ${valor}`

    function calcular(n) {
        for (let i = 1; i <= 10; i++) {
            res.innerHTML += ` <br>${n} x ${i} = ${n * i}`
        }
    }

    calcular(valor)
}