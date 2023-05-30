function Atravessar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var body = document.body

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (inicio.value.length == 0 && fim.value.length == 0 && passo.value.length == 0) {
        alert('[ERROR] Insira um valor nas 3 caixas')
    } else {

        if (p <= 0) {
            alert('Quantidade de Passos inválido, alterando para o minímo')
            p = 1
        } else {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
            let item = document.createElement('p')
            item.innerHTML = `vocë atravessou a rua que tinha ${f} `
            body.appendChild(item)
        }




    }

}