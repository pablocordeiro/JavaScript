var array = "Aerys Rhaegar Viserys Daenerys".split(' ');

console.log(array);

console.log(array.toString());

console.log(array.join(' | '));

array.push("Visenya"); //Adiciona ao final do array
console.log(array);

array.unshift("Aemon"); //Adiciona no começo do array
console.log(array);

var elemento;

elemento = array.pop(); //Remove o último elemento
console.log(array);
console.log(elemento);

elemento = array.shift(); //Remove o primeiro elemento
console.log(array);
console.log(elemento);

var slice = array.slice(2,3);
console.log(slice);

var splice = array.splice(0, 1, "Aemon", "Rhaenys");
console.log(splice);
console.log(array);

array = array.concat(splice, slice);
console.log(array);