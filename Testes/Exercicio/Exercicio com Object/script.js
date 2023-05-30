// pegar todos os input
// testar se o limite de letras é maior que 50
// testar se a pessoa colocou uma idade valida
// testar se os campos estão vazios
// verificar se ja existe um email repetido
// Adicionar os usuarios

var Nome = document.getElementById('name')
var Idade = document.getElementById('age')
var Email = document.getElementById('email')
var select = document.getElementById('select')

let ListOfObject = { nome: '', idade: 0, email: '' }

function inserir() {

    var nome = Nome.value
    var idade = Idade.value
    var email = Email.value

    ListOfObject.nome = nome
    ListOfObject.idade = idade
    ListOfObject.email = email

    let texto = `Usuário:${nome}, Idade: ${idade}, Email:${email}`
    let option = document.createElement('option')
    option.addEventListener("dblclick", function inserirDados() {
        Nome.value = ListOfObject.nome
        Email.value = ListOfObject.email
        Idade.value = ListOfObject.idade
    })
    option.text = texto
    select.appendChild(option)
    Nome.value = ''
    Email.value = ''
    Idade.value = ''
}

