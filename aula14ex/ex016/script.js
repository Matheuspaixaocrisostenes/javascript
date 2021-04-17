function contar(){
    var inicio = document.getElementById('txtn1').value
    var fim = document.getElementById('txtn2').value
    var passo = document.getElementById('txtp').value
    var res = document.getElementById('result')
    let i = Number(inicio)
    let f = Number(fim)
    let p = Number(passo)
    res.innerText = ''
    if(p==0){
        alert('Passo Invalido, passo valendo 1')
        p = 1
    }
    for(var c = i; c <= f; c+=p){
        res.innerText += c + `\u{1f449}`
    }
    res.innerText+= `\u{1f3c1}`
}