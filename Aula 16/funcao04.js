function fatorial(n) { // função vai basicamente fazer isto 5*(5-1)*(5-2)*(5-3)*(5-4) = 120
    let fat = 1 // cria uma varievel que recebe 1
    for (let c = n; c > 1; c--) { // cria variavel c e atribiu o valor de n; se c for maior que 1, tire 1 do c
        fat *= c //fazendo uma auto-multiplicacao
        // fat vale 1 e vai multiplicar por todos os valores que se tiver
    }
    return fat // retornara fat
}

console.log(fatorial(5))