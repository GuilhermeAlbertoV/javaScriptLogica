function sistema() {
    let sem = new Date()
    let semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    let mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    let res = document.getElementById('res')

    res.innerHTML = `Hoje é ${semana[sem.getDay()]}, ${sem.getDay()} de ${mes[sem.getMonth()]} de ${sem.getFullYear()}, as ${sem.getHours()}:${sem.getMinutes()}:${sem.getSeconds()}`
}