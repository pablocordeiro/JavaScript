function dizerOi(nome) {
	console.log("Olá " + nome);
}

dizerOi('Daenerys');
dizerOi('Tyrion');

// Expressão de função, chamada de função anônima
var dizerOla = function (nome) {
	console.log("Olá " + nome);	
}

dizerOla('Sansa');

//Usando construtor

var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");

dizerTchau('Arya');

/*
	Vale ressaltar que com o Hoisting, 
	apenas a primeira forma funciona em qualquer parte do código, as 
	outras formas só funcionariam após a linha de declaração da função.
*/