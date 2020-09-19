/*
	Executar duas ou mais promises de forma que todas deem certo, caso uma venha ter nenuma zerá executada
*/

const incrementandoVelocidade = (velocidadeIncrementada) => {
	return new Promise((resolve, reject) => {
		if(velocidadeIncrementada <= 0 ){
			reject("Frenagem acionada.");
		}else{
			resolve(velocidadeIncrementada * 0.9);
		}
	})
}


const novoConsumoBateria = (velocidadeCorrente, velocidadeIncrementada) => {
	return new Promise((resolve, reject) => {
		let novoConsumoBateria = (velocidadeCorrente+velocidadeIncrementada)/ 10000;
		if(novoConsumoBateria>0 ){
			resolve(novoConsumoBateria);
		}else{
			reject("Consumo zerado");
		}
	})	
}

let velocidade = 70 ;

let velocidadeAumentada = incrementandoVelocidade(velocidade);
let consumoBateria = novoConsumoBateria(-80, velocidade);

Promise.all([velocidadeAumentada, consumoBateria]).then(results => {
	console.log(results);
} ).catch(errors => console.log(errors)); 