const list = []


function adicionar() {
    var dados = document.getElementById('dados')
    var res = document.getElementById('res')
    var select = document.getElementById('select')
    let n = Number(dados.value) // vai pegar o valor do input e colocar na variavel n
    // primeiro pegar o valor do input
    // testar se o input está vazio 
    // testar se ele é maior do que 100
    // testar se ele já existe na lista
    // Adicionar o valor na lista

    if (n == 0) {  // vai testar se o tem algum valor
        alert('Insira um valor valido')
    } else {
        if (n > 100) { // vai testar se o valor é igual ou maior que 100
            alert('Valor ultrapassou os limites')
        } else {
            if (list.indexOf(n) >= 0) { // vai pegar o valor do input e testar se ele é igual ou maior que 0
                // ou seja vai testar se o valor que foi inserido no input é o mesmo que está no array
                alert('Valor já existe na lista')
            } else {
                list.unshift(n) // vai adicionar o valor no primeiro indice
                optionTxT = `o ${n} foi adicionado`
                let item = document.createElement("option") // vai criar um elemento option
                item.text = `o ${n} foi adicionado` // vai mostrar uma mensagem 
                select.appendChild(item) // vai mostrar o elemento dentro do select
                res.innerHTML = ''
            }
        }
    }
    dados.value = ''
    dados.focus()
}

function finalizar() {

    // pegar todos os valores de list
    // somar todos eles
    // e exibir uma mensagem
    var dados = document.getElementById('dados')
    var res = document.getElementById('res')
    var select = document.getElementById('select')
    var opt = document.getElementsByTagName('option')
    let soma = 0
    let med = 0


    for (let i = 0; i < list.length; i++) { // vai testar se i é menor que a lista se for vai adicionar mais 1
        soma += list[i]
        // ele vai pegar todos os itens da lista e somar
    }

    for (let i = 0; i < list.length; i++) {
        med = (soma += list[i]) / list.length
        //  soma completa da lista e depois dividir pelo tamanho da lista e atribuir a varivel med
    }


    res.innerHTML = `<p> Ao todo, temos ${list.length} números cadastrados <p/>` // mostrando todos os elementos inseridos no array
    res.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(null, list)} <p/>` // o métodos max como o nome diz vai pegar o maior valor
    // mais como é um array, colocamos o método apply e passamos null no primeiro parâmetro, o método apply vai enterpretar os valores do arrayt
    // como se fossem parâmetros porque a função Math.max() recebe 2 valores ou mais por isso passamos null
    res.innerHTML += `<p>O menor valor informado foi ${Math.min.apply(null, list)} <p/>`
    res.innerHTML += `<p/>somando todos os valores, temos ${soma}  <p/>`
    res.innerHTML += `<p/>a média dos valores digitados é ${med.toFixed(2)} <p/>`
}

