function estacao() {
    let mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    let res = document.getElementById('res')

    let est = prompt('Qual o mês?')

    if (est == mes[0] || est == mes[1] || est == mes[2]) {
        res.innerHTML = `No Mês de ${est}, Estamos na estação <strong>INVERNO</strong>`
    } else if (est == mes[3] || est == mes[4] || est == mes[5]) {
        res.innerHTML = `No Mês de ${est}, Estamos na estação <strong>PRIMAVERA</strong>`
    } else if (est == mes[6] || est == mes[7] || est == mes[8]) {
        res.innerHTML = `No Mês de ${est}, Estamos na estação <strong>OUTONO</strong>`
    } else if (est == mes[9] || est == mes[10] || est == mes[11]) {
        res.innerHTML = `No Mês de ${est}, Estamos na estação <strong>VERÃO</strong>`
    }
}