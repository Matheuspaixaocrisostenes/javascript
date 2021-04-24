let num = [5,8,2,9,3] // Declaração de Vetor
num.push(1);// Adiciona o numero 1 no fim do vetor
//num.length Mostra o comprimento do Vetor
num.sort() // deixa os elementos do aray em ordem
console.log(num);// Mostra o vetor no terminal
console.log(`o vetor num tem ${num.length} Posições`);
console.log(`O Primeiro valor do Vetor é ${num[0]}`); //Mostra o primeiro valor do vetor
let pos = num.indexOf(4) // busca o valor 4 dentro do vetor
if(pos == -1){
    console.log(`Valor não encontrado`);
}else{
    console.log(`O valor 4 esta na posição ${pos}`);
}
