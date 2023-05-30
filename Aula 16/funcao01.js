function parimpar(n) {
    if (n % 2 == 0) { // vai calcular se o valor escolido tem o resto zero ou seja
        return 'Par' // ele vai dividir o valor por 2 e se o resto for 0 será par
    } else {
        return 'Impar'
    }

}

let res = parimpar(11)
console.log(res)
