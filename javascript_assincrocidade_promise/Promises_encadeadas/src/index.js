const spaceship = {
	nome: "Rontaro",
	cargaAtualBateria: 50,
	consumoPorKms: 0.00008
}

const atualizarCargaBateria = (cargaConsumida) => {
	return new Promise((resolve,reject) => {
		spaceship.cargaAtualBateria -= cargaConsumida;
		if(spaceship.cargaAtualBateria > 0){
			resolve(spaceship.cargaAtualBateria);
		}else{
			reject("Bateria esgotada nave será desligada em poucos segundos.");
		}
	})
}

const calculoConsumoBateria = (velocidade, segundos) =>{
	return new Promise((resolve,reject) => {
			if(spaceship.consumoPorKms <=0 || velocidade <= 0){
				reject("Nave encontra-se parada");
			}else{
				let cargaConsumida = spaceship.consumoPorKms*velocidade*segundos;
				resolve(cargaConsumida);
			}
		}
	)
}
/*
calculoConsumoBateria(90,300).then(cargaConsumida => {
	atualizarCargaBateria(cargaConsumida).then(novaCarga => {
		console.log(`Carga Atual ${novaCarga}`);}
	).catch(error => console.log(error))}
	).catch(error => console.log(error)) 
*/

// repare um unico catch para as duas promises


calculoConsumoBateria(90, 300).then(cargaConsumida => {
	return atualizarCargaBateria(cargaConsumida)
	}).then( novaCarga => console.log(`Nova carga: ${novaCarga}`)).catch(error => console.log(error))





