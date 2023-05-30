function contar() {
    let inicio = document.getElementById('inpNumber')
    let fim = document.getElementById('inpMax')
    let passo = document.getElementById('inpSkip')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // testa se 
        // o valor,fim ou passo existe algum valor neles
        res.innerHTML = 'Impossivel contar!!'
        //  alert('[ERROR] Faltam dados!')
    } else {

        res.innerHTML = 'Contando: <br>' //caso tenho o valor em ambos os inputs o res vai exibir uma
        // Mensagem usando o innerHTML
        let i = Number(inicio.value) // cria a variavel i e atribuiu o input convertido para number
        let f = Number(fim.value) // cria a variavel f e atribuiu o input convertido para number
        let p = Number(passo.value) // cria a variavel p e atribuiu o input convertido para number
        if (p <= 0) { // testa se p é igual a 0
            // se for igual a zero vai mostra o erro e mudar o valor de 0 para 1
            alert('Passo inválido! considerando PASSO 1')
            p = 1
        }
        if (i < f) { // se i for menor que f vai fazer a contagem crescente
            // Contagem Crescente
            for (let c = i; c <= f; c += p) { // cria a variavel c que recebe o valor i; e faz o teste lógico
                // se c for menor ou igual a f; depois o c vai a crescentar para si mesmo a varivel p
                res.innerHTML += ` ${c} \u{1F449}` // vai exibir os numeros com o emoji de mão apontando
            }

        } else {
            // Contagem Regressiva
            for (let c = i; c >= f; c -= p) { // aqui vai ser o contrario; cria a varivel c e ela recebe i;
                // depois testa se c é maior ou igual a f; e envez de a crescentar nós  vamor retirando o 
                // valor de c  até ficar igual a f
                res.innerHTML += `${c} \u{1F449}` // vai mostrar todos os valores com o emoji de mão apontando
            }

        }
        res.innerHTML += `\u{1F3C1}` // vai mostrar uma bandeira de chegada independentemento se for uma 
        // contagem 
    }
}