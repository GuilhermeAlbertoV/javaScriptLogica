function valor() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let res = document.getElementById('res')




    function contagem(inicio, fim) {
        for (let i = inicio; i <= fim; i++) {
            res.innerHTML += ` ${i} =>`
        }
    }

    function regressiva(inicio, fim) {
        for (let i = inicio; i >= fim; i--) {
            res.innerHTML += ` ${i} =>`
        }
    }

    if (inicio.value < fim.value) {
        res.innerHTML = `contando de ${inicio.value} até ${fim.value} <br>`
        contagem(inicio.value, fim.value)
    }
    if (inicio.value > fim.value) {
        res.innerHTML = `contando de ${inicio.value} até ${fim.value} <br>`
        regressiva(inicio.value, fim.value)
    }
    if (inicio.value == fim.value) {
        res.innerHTML = 'Impossivel contar ambos valores iguais'
    }

}