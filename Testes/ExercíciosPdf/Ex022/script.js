function contar() {
    let res = document.getElementById('res')

    res.innerHTML += `Contando de 1 a 10, marcando os pares`

    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            res.innerHTML += `<strong>${i}</strong> =>`
        } else {
            res.innerHTML += `${i} =>`
        }


    }
}