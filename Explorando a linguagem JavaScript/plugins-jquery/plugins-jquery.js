$(function() {
	var valorElement = $('#valor');
	var totalElement = document.getElementById('total');
	var totalMascara = $('#total-mascara');
	var mascaraConfig = {
		prefix: 'R$ ',
		thousands: '.',
		decimal: ','
	}

	valorElement.on('keyup', function (argument) {
		var total = 0;
		var valor = valorElement.maskMoney('unmasked')[0];
		// var valor = parseFloat(valorElement.val() ? valorElement.val() : 0);

		if (valor > 0 && valor < 10) {
			total = valor + valor * 0.3 + 5;
		} else if (valor >= 10 && valor < 100) {
			total = valor + valor * 0.1 + 2;		
		} else {
			total = valor;
		}

		totalMascara.maskMoney(mascaraConfig);
		totalMascara.maskMoney('mask', total); 
		totalElement.innerHTML = totalMascara.val();
	});	

	valorElement.maskMoney(mascaraConfig);
});
