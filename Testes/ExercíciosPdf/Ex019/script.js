function calcular() {
    let res = document.getElementById('res')
    let num1 = prompt('Primeiro valor:')
    let num2 = prompt('Segundo valor:')
    let newNum1 = Number(num1)
    let newNum2 = Number(num2)
    let oper = Number(prompt(`Valores informados: ${newNum1} e ${newNum2}. \n O que vamos fazer? \n [1] Somar \n [2] Subtrair \n [3] Multiplicar \n [4] Dividir`))

    res.innerHTML = 'Calculando'
    switch (oper) {
        case 1:
            res.innerHTML = `${newNum1} + ${newNum2} = ${newNum1 + newNum2}`
            break;
        case 2:
            res.innerHTML = `${newNum1} - ${newNum2} = ${newNum1 - newNum2}`
            break;
        case 3:
            res.innerHTML = `${newNum1} * ${newNum2} = ${newNum1 * newNum2}`
            break;
        case 4:
            res.innerHTML = `${newNum1} / ${newNum2} = ${newNum1 / newNum2}`
            break;
        default:
            res.innerHTML = `OPÇÃO INVÁLIDA! Você digitou ${newNum1} e ${newNum2}, não sei o que fazer com eles`
            break;
    }
}