let res = document.getElementById('res')

let gerador = 0
function gerar() {
    var mostrar = Math.floor(Math.random(gerador) * 100)

    res.innerHTML = `Acabei de pensar no número ${mostrar}!`
}

function limpar() {
    res.innerHTML = ''
}
