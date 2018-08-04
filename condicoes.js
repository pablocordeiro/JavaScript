// if (bool) { }

/*

if (x == 10) {

}

var teste = x == 15;

if (teste) {

}

*/

var idade = 20;
var texto;

if (idade > 18) {
	y = "maior";
} else if (idade == 18) {
	y = "igual";
} else {
	y = "menor";
}

//console.log(y);


switch(idade) {
	case 18:
		y = 'dezoito';
		break;
	case 19:
		y = 'dezenove';
		break;
	default:
		y = 'sei lá';
}

console.log(y);