var joao = {
	nome: 'João',
	idade: 25,
	endereco: {
		logradouro: 'Av Brasil',
		numero: 101,
		complemento: 'casa',
		cidade: 'Rio de Janeiro',
		estado: 'RJ'
	}
}

for (prop in joao) {
	console.log(prop, '-->', joao[prop]);

	if (prop === 'idade') {
		console.log('Achei idade');

	}
}