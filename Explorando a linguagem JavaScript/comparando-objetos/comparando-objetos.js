var joao = {
	nome: 'Joao',
	idade: 25,
	email: 'teste@gmail.com',
	igualA: function (obj) {
		return this.email === obj.email;
	}
}

var maria = {
	nome: 'Maria',
	idade: 27,
	email: 'teste@gmail.com'
}

console.log('Joao e maria tem o mesmo email?', joao.igualA(maria));