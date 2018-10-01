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

console.log(joao);

console.log('Cidade de João', joao.endereco.cidade);

joao.endereco.numero = 102;

console.log(joao);

console.log(joao.endereco.cep);

console.log('Estado: ', joao['endereco']['estado']);