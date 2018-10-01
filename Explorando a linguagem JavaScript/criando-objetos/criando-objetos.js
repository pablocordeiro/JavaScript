var fox = {cor: 'Prata', modelo: 'fox', fabricante: 'VW'};

console.log('fox', fox);
console.log(typeof fox);

console.log('Cor do fox', fox.cor);
//Pintando o fox
fox.cor = 'Branco';
console.log('Fox depois de pintado:', fox);
console.log('Modelo:', fox['modelo']);

fox.peso = 1100;
console.log(fox);

console.log('Potencia do fox', fox.potencia);

fox.ligar = function(){
	console.log('Ligando o carro');
};

console.log('fox', fox);
fox.ligar();

var celta = {
	cor: 'Branco',
	modelo: 'celta',
	fabricante: 'GM',
	ligar: function () {
		console.log('Ligando o carro');
	}
};
console.log('celta', celta);