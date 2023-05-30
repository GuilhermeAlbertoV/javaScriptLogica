function calcular() {
    let res = document.getElementById('res')
    let idade = prompt('Em que Ano você nasceu?')


    let data = new Date()
    function teste(n) {
        let ano = data.getFullYear()
        let testeIdade = ano - n
        return testeIdade
    }

    let newIdade = Number(idade)

    res.innerHTML = `Quem nasceu em ${newIdade} vai completar ${teste(newIdade)} anos em ${data.getFullYear()}`
}