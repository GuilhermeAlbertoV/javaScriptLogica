var nomeInput = document.getElementById('nome')
var notaInput = document.getElementById('nota')
var table = document.getElementById('table')
var mostrar = document.getElementById('showStudents')
var res = document.getElementById('res')
const turma = { nome: [], nota: [] }

function inserir() {

    var nome = nomeInput.value
    var nota = Number(notaInput.value)

    if (nome.length == 0 || nota.length == 0) {
        alert('insira os valores')
    } else {
        if (nota > 10) {
            alert('nota invalida')
        }
        else {
            turma.nome.push(nome)
            turma.nota.push(nota)
            mostrar.style.display = 'inline'
            console.log(turma)
        }
    }
}

function mostrarAlunos() {

    function media(n1) {

        turma.nota.reduce((acc, cur) => {
            var soma = acc + cur, n1
        })
        var med = soma / 2
        return med

    }

    res.innerHTML = `Aluno(a): ${turma.nome}  |  Nota: ${turma.nota}  <br>`
    res.innerHTML += `A média da turma é de ${med}`


}