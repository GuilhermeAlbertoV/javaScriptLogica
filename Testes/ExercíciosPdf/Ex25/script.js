function valor() {
    let num = document.getElementById('posit')
    let res = document.getElementById('res')

    res.innerHTML = `contando de 0 até ${num.value} <br>`

    function contar(n) {
        for (let i = 0; i <= n; i++) {
            res.innerHTML += `${i} =>`
        }
    }
    contar(num.value)
}