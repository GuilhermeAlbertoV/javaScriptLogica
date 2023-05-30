function clicar() {
    var nome = prompt('Qual o seu Nome?')
    var res = document.getElementById('res')

    res.innerHTML = `Olá, ${nome}! é um grande prazer te conhecer`

}