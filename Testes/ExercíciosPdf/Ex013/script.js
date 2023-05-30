function maiorOuMenor() {

    let res = document.getElementById('res')
    let valor1 = prompt('Digite o primeiro número:')
    let valor2 = prompt('Digite o segundo número:')

    function teste(n, n2) {
        let tes = Math.max(n, n2)
        return tes
    }

    let newValor = Number(valor1)
    let newValor2 = Number(valor2)

    res.innerHTML = `Analisando os valores ${newValor} e ${newValor2}, o maior valor é ${teste(newValor, newValor2)}`

}