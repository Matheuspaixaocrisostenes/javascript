function carregar(){
    let msg = document.getElementById("time")
    let img = document.getElementById("img")
    var now = new Date()
    var hour = now.getHours()
    let p = document.getElementById('msg')
    msg.innerText = `Now is ${hour} Hours`
    if(hour >=0 && hour < 12){
        document.body.style.background = "rgb(241, 205, 160)"
        img.src = "images/manha.png"
        p.innerText = 'Good Morning'
    }else{
        if(hour >= 12 && hour <= 18){
            document.body.style.background = "rgb(255, 127, 113)"
            img.src = "images/tarde.png"
            p.innerText = 'Good afternoon'
        }else{
            document.body.style.background = "gray"
            img.src = "images/noite.png"
            p.innerText = 'Good Night'
        }
    }
}
