let amigo = {
    name: 'José',
    sex: 'M',
    peso: 85.4,
    engordar(p=0){
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.name} pesa ${amigo.peso}Kg`);