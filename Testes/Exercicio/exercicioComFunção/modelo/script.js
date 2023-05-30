function verificar() {
    var Inputnome = document.getElementById('nome')
    var inputNumero = document.getElementById('numero')
    var radio = document.getElementsByName('trueorfalse')
    var res = document.getElementById('res')

    const lista = { id: 0, nome: '', salario: 0, aumento: false, quantidade: 0 }

    var nome = Inputnome.value
    var numero = Number(inputNumero.value)

    let idd = lista.id

    if (nome == '' || numero.length == 0) {
        alert('Insira o nome ou o usuário')
    } else {
        if (numero > 2000 && radio[1].checked) {
            if (lista.id == 0 || lista.id != 0) {
                lista.id++
                lista.quantidade = numero * (35 / 100)
                var resto = numero - lista.quantidade.toFixed(2)
                lista.nome = nome
                lista.aumento = false
                res.innerHTML = `olá ${nome} seu salário foi reduzido 35% pela mintira seu sálario atual é de ${resto.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
            }
        }
        if (numero < 2000 && radio[0].checked) {
            alert('erro parametros informados inválidos')
        }
        if (numero < 2000 && radio[1].checked) {
            if (lista.id == 0 || lista.id != 0) {
                lista.id++
                var total = numero * (50 / 100)
                var resto = numero + total
                lista.nome = nome
                lista.aumento = true
                lista.salario = resto
                lista.quantidade = total
                res.innerHTML = `olá ${nome} seu salário é menor do que 2000, você recebeu um aumento de 50% de ${resto.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
            }
        }
        if (numero >= 2000 && radio[0].checked) {
            if (lista.id == 0 || lista.id != 0) {
                lista.id++
                lista.nome = nome
                lista.aumento = false
                lista.salario = numero
                lista.quantidade = 0
            }
            res.innerHTML = `olá ${nome} seu salário é de ${numero.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
        }

        console.log(lista)
    }
}