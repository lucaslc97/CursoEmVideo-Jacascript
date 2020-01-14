function carregar ()
{

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById("imagem")
    var data = new Date()
    hora = data.getHours();
    min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${min}h`;

    if (hora >= 0 && hora <= 12)
    {
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = "#dad193"
    }
    else if (hora >= 12 && hora <= 18)
    {
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = "#da9077"

    }
    else 
    {
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = "#09191c"

    }
}

