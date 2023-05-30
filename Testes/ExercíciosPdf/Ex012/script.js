function clicar() {
    let res = document.getElementById('res')
    let valor = prompt('Digite um número')

    function testar(n) {
        if (n % 2 == 0) {
            let par = 'PAR'
            return par
        } else {
            let impar = 'IMPAR'
            return impar
        }
    }
    let newValor = Number(valor)

    res.innerHTML = `O número ${newValor} que foi digitado é ${testar(newValor)}`



}