var Carro = function (nome, placa) {
	this.nome = nome;
	this.placa = placa;
	this.fabricante = 'VW'
}

var fox = new Carro('Fox', 'ABC-1234');
console.log(fox);