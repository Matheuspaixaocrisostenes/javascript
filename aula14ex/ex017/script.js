let now = new Date()
let hour = now.getHours() 
let tn = document.getElementById('time')
tn.innerText = `Now is ${hour} hours `
let resu = document.getElementById('Result')
if (hour < 12){
    resu.innerText = "Good morning"
    document.body.style.background = "rgb(241, 205, 160)"
}else{
    if(hour >= 12 && hour < 18){
        resu.innerText = 'Good evening'
        document.body.style.background = "rgb(255, 127, 113)"
    }else{
        resu.innerText = 'Good Night'
        document.body.style.background = "gray"
    }
}
