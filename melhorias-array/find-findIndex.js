const data = [
    {
        nome: 'Edson',
        age: 21,
        city: 'Ferraz'
    },
    {
        nome: 'Pedro',
        age: 52,
        city: 'São paulo'
    }
];

const sampleArray = [4, -5, -1];

const underZero = sampleArray.find(x => x < 0);
//find retorna o primeiro número que atende sua condição.
console.log(underZero);
    
const underZeroIndex = sampleArray.findIndex(x => x < 0);
//findIndex retorna o indice onde o elemento foi encontrado.
console.log(underZeroIndex);

//Também pode ser usado para interar sobre arrays mais complexos.
console.log(data.find(value => value.age === 21));
