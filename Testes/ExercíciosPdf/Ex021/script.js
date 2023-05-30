function contar() {
    let res = document.getElementById('res')
    res.innerHTML = `Contando de 1 até 100 <br>`

    for (let i = 1; i <= 10; i++) {
        res.innerHTML += ` ${i} => `
    }
}