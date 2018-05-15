//Ultilizado para desmembrar qualquer elemento que seja interavel.

let front = ['react', 'vue', 'angular'];
let back = ['python', 'ruby', 'nodejs'];

//tranforma em um array
console.log([...'Edson']);

//tranforma em strings
console.log(...front);

//unindo os 2 arrays
let fullStack1 = front.concat(back);
console.log(fullStack1);

//unindo 2 arrays com spread
let fullStack = [...front, 'RxJS', ...back];
console.log(fullStack);