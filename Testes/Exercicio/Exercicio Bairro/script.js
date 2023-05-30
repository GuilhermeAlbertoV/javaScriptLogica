
var ID = document.getElementById('id')
var valorEntrega = document.getElementById('valor')
var textArea = document.getElementById('desc')
var th = document.getElementById('th')

var list = { ide: 0, descricao: '', valorEnt: 0 }

function inserir() {
    var id = ID.value
    var desc = textArea.value
    var valor = valorEntrega.value

    if (list.ide == 0 || list.ide != 0) {
        list.ide++
    }

    list.descricao = desc
    list.valorEnt = valor
    valorEntrega.value = ''
    textArea.value = ''
    valorEntrega.focus()
    console.log(list)
}