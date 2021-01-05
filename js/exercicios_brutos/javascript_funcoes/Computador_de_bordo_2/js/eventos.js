function slowdown(velocidade, impressao) { //callback
	let desacelerar = 20;

	while(velocidade > 0){
		impressao(velocidade);
		velocidade -= desacelerar;
	}

	alert(`Nave encontra-se parada`);
}

let velocidadeInicialNave = 150;

slowdown(velocidadeInicialNave, function(velocidade){
	console.log(`Velocidade atual: ${velocidade}`);
})