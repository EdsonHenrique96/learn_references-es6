let data = {
    name: 'Edson',
    surname: 'Batista',
    age: 21,
    blog: 'http://edsonbatista.com.br',
    social: {
        twitter: '@edson_batista',
        facebook: '/edsonbasita'
    }
};

//get name and age in data
const {name, age} = data;
console.log(name, age);

const {twitter, facebook} = data.social;
console.log(twitter, facebook);

//create alias for facebook
const {facebook: fb} = data.social;
console.log(fb);

const {city = 'Ferraz'} = data;
console.log(city);
console.log(data);

