function contar(){
    var inicio = document.getElementById('txtn1')
    var fim = document.getElementById('txtn2')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('result')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerText = 'Impossivel de contar'
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            alert('Passo Invalido conssiderando passo 1') 
            p=1
        }
        if(i < f){
            for(let c = i; c <= f; c+=p){
                res.innerHTML += `${c} \u{1f449} `
            }
        }else{
            for(let c = i; c >= f; c-=p){
                res.innerHTML += ` ${c} \u{1f449} `
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}