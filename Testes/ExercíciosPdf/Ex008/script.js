function calcular() {
    let res = document.getElementById('res')
    let num = prompt('Digite um número:')
    let newNum = Number(num)
    let quadrado = newNum * newNum
    let cubico = newNum * newNum * newNum

    res.innerHTML = `O número a ser analisado aqui será o ${newNum} <br> <br> <br>`
    res.innerHTML += `O seu valor absoluto é ${newNum}<br><br>`
    res.innerHTML += `A sua parte inteira é ${Math.trunc(newNum)} <br><br>`
    res.innerHTML += `O valor inteiro é ${Math.round(newNum)}<br><br>`
    res.innerHTML += `A sua raiz quadrada é ${Math.pow(newNum, 0.5)}<br><br>`
    res.innerHTML += `A sua raiz cúbica é ${Math.pow(newNum, 1 / 3)}<br><br>`
    res.innerHTML += `O valor de ${newNum}<sup>2</sup> é ${quadrado} <br><br>`
    res.innerHTML += `O valor de ${newNum}<sup>3</sup> ${cubico} <br><br>`





}