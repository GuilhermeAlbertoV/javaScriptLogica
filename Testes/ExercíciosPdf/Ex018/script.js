let res = document.getElementById('res')

var valor = Math.floor(Math.random(1) * 100)


function jogo() {
    let palpite = prompt('Qual é o seu palpite')

    function teste(n) {
        if (n == valor) {
            let resposta = `<strong>Parábens!</strong> Você acertou! Eu tinha sortedo o valor ${valor}!`
            return resposta
        } else if (n > valor) {
            let resposta2 = `Você falou ${palpite}. Meu número é <strong>MENOR!</strong>`
            return resposta2
        } else if (n < valor) {
            let resposta3 = `Você falou ${palpite}. Meu número é <strong>MAIOR!</strong>`
            return resposta3
        }
    }

    let newPalpite = Number(palpite)

    res.innerHTML = teste(newPalpite)
}