function parimp(n){
    if(n%2==0){
        return 'Par'
    }else{
        return 'Impar'
    }
    // ou
    // let res = n%2==0?'par':'Impar'
    // return res
}

console.log(parimp(8));