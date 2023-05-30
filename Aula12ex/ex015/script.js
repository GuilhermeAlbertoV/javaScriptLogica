function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAge = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (formAge.value.length == 0 || formAge.value > ano || formAge.value < 1900) {
        alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(formAge.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'numero1.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'numero3.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'numero5.png')
            } else {
                // Idoso
                img.setAttribute('src', 'numero7.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'numero2.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'numero4.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'numero6.png')
            } else {
                // Idoso
                img.setAttribute('src', 'numero8.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        img.setAttribute('heigth', '50px')
        img.setAttribute('width', '50px')
        img.style.borderRadius = '10px'
        img.style.margin = 'auto'
        img.style.display = 'block'
        res.appendChild(img)
    }
}