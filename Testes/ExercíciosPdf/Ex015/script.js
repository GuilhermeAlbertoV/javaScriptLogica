function analise() {
    let res = document.getElementById('res')
    let Data = new Date()

    let semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    let mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']


    res.innerHTML = `Dia: ${Data.getDate()} <br><br>`
    res.innerHTML += `Mês: ${mes[Data.getMonth()]} <br><br>`
    res.innerHTML += `Mês: ${Data.getFullYear()} <br><br>`
    res.innerHTML += `Semana: ${semana[Data.getDay()]} <br><br>`
    res.innerHTML += `Hora: ${Data.getHours()} <br><br>`
    res.innerHTML += `Minutos: ${Data.getMinutes()} <br><br>`
    res.innerHTML += `Segundos: ${Data.getSeconds()} <br><br>`
}