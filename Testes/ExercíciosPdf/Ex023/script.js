function apenaspares() {

    let res = document.getElementById('res')

    res.innerHTML += `Números pares de 1 até 10 <br>`

    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            res.innerHTML += `${i} =>`
        }
    }
}