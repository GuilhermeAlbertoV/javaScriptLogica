let res = document.getElementById('res')
let clickes = 0

function contar() {
    res.innerHTML = `O contador está em ${++clickes} Cliques`
}

function zerar() {
    clickes = 0
    res.innerHTML = `O contador está em ${clickes} Cliques`
}