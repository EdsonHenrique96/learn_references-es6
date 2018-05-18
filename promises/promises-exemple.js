// Status das promises
//     pending
//     resolved
//     rejected
const fetch = require('node-fetch')

let posts = fetch('https://willianjusten.com.br/search.json')

posts
    .then((data) => {
        return data.json();
    })
    .then((data) => {
        data.map((arg) => {
            console.log(arg.title);
        })
    })
    .catch((err) => {
        console.log(err)
    })