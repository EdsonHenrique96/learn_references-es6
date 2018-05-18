const currency =  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({currency: 'euro', value: 3.50});
    }, 2000);
});

const countries = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(['Ireland', 'England', 'Scotland']);
    }, 600);
});

//Só responde quando a ultima promise for resolvida,
//Se uma promise der erro nenhuma irá responder. 
Promise
    .all([currency, countries])
    .then(value => console.log(value))
    .catch(err => console.log(err))

//Responde apenas a promise mais rapida    
Promise
    .race([currency, countries])
    .then(value => console.log(value))
    .catch(err => console.log(err))