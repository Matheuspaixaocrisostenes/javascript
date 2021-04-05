let age = 67
console.log(`you are ${age} years old`);
if(age < 16){
    console.log(`do not vote`)
}else{
    if(age < 18 || age > 65){
        console.log("opcional vote");
    }else{
        console.log(`compulsory Volte`);
    }
}