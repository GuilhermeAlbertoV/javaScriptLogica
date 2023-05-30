function mensagem() {
    alert('Seja bem-vindo(a) ao meu site!')
}

function clicar() {
    var numero = prompt('Digite um número:')
    var res = document.getElementById('res')
    res.innerHTML = `O dobro de ${numero} é ${numero * 2} e a metade é ${numero / 2}`

}