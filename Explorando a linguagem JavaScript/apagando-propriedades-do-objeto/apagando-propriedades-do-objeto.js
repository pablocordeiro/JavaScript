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
delete joao.idade;
console.log(joao);

delete joao['endereco']['cidade'];
console.log(joao);