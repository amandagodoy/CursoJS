function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia ^^/
        img.src = 'manha.png'
        document.body.style.background = '#A69C09'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde uhuuu!
        img.src = 'tarde.png'
        document.body.style.background = '#6F8297'
    } else {
        //Boa noite lolololol
        img.src = 'noite.png'
        document.body.style.background = '#EE7762'
    }
}