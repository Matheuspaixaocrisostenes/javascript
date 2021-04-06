let now = new Date()
let hour = now.getHours()
let tn = document.getElementById('time')
tn.innerText = `Now is ${hour} hours `
let resu = document.getElementById('Result')
if (hour < 12){
    resu.innerText = "Good morning"
}else{
    if(hour > 12){
        resu.innerText = 'Good evening'
    }else{
        resu.innerText = 'Good Night'
    }
}
