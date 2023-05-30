function calcular() {
    let res = document.getElementById('res')
    let nome = prompt('Digite o Nome do Aluno(a):')
    let primeiraNota = prompt(`Qual foi sua primeira nota ${nome}`)
    let segundaNota = prompt(`Além de ${primeiraNota}, Qual foi a outra nota de ${nome}`)
    let newprimeiraNota = Number(primeiraNota)
    let newsegundaNota = Number(segundaNota)
    let média = (newprimeiraNota + newsegundaNota) / 2

    res.innerHTML = `Calculando a média final de ${nome} <br>`
    res.innerHTML += `As notas obtidas foram ${primeiraNota} e ${segundaNota} <br>`
    res.innerHTML += `A média final será ${média}`
}