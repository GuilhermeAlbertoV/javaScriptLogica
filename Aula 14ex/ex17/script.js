function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')


    if (num.value.length = 0) { // teste se o tamanho do array é 0
        alert('Digite um número')
    } else {
        let n = Number(num.value) // padrão :/

        for (let c = 0; c <= 10; c++) { // cria o elemento c, depois faz o teste lógico de enquanto ele for 
            // menor que 10, e depois incrementa
            let item = document.createElement('option') //cra a variavel item e depois cria um elemento option
            item.text += `${n} x ${c} = ${n * c}` // escreve dentro do option igual o innerHTML ou innerText
            tab.appendChild(item) // chama o elemento option para dentro do select
        }
    }

}
