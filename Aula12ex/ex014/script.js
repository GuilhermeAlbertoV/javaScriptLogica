function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var corpo = document.body

    msg.innerHTML = `Agora são ${hora}:${minuto}`

    if (hora >= 0 && hora < 12) {
        img.src = 'pexels-gareth-davies-910411 (2).jpg'
        corpo.style.background = 'rgb(255, 201, 24)'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'pexels-nihat-69224.jpg'
        corpo.style.background = 'rgb(9, 201, 201)'
    } else {
        img.src = 'pexels-reynaldo-brigworkz-brigantty-771883 (1).jpg'
        corpo.style.background = 'rgb(46, 16, 80)'
    }

}