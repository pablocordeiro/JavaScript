var temFoto = true;


/*
var pathFoto = '';
if (temFoto) {
	pathFoto = 'maria-perfil.jpg';
} else {
	pathFoto = 'mock-perfil.jpg';
}
*/

var pathFoto = temFoto ? 'maria-perfil.jpg' : 'mock-perfil.jpg';


console.log('path da foto', pathFoto);
