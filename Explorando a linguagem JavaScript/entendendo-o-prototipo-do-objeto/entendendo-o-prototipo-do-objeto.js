var volks = {
	fabricante: 'VW'
}

var fox = {
	nome: 'Fox',
	placa: 'ABC-1234'
}

var gol = Object.create(volks);
gol.nome = 'Gol';
gol.placa = 'ABC-1234';

console.log('fox', fox);
console.log('Gol', gol);

console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));

console.log('fox.fabricante', fox.fabricante);
console.log('gol.fabricante', gol.fabricante);

Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante', fox.fabricante);