let response =  new Promise((resolve, reject) => {
    setTimeout(() => {
        if(true){
            resolve('Hello, it works');
        } else {
            reject('Error !');
        }
    }, 2000);
});

response
    .then((value) => {
        console.log(value);
        return 'foo'
    })
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    })