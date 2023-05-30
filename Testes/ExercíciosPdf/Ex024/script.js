function contagemReg() {
    let res = document.getElementById('res')

    res.innerHTML = `Contagem regressiva de 10 a 1 <br>`

    for (let i = 10; i >= 1; i--) {
        res.innerHTML += ` ${i} =>`
    }
}