import "core-js"
import "regenerator-runtime/runtime"

let laserGun = {
	shotsPerSecond: 30,
	currentPosition: [30,45,70],
	firing: false
}

/*
function adjustPosition(x,y,z){
	return new Promise((resolve) => {
		laserGun.currentPosition = [x,y,z];
		resolve([x,y,z]);
	})
}

function fire(x,y,z){
	return new Promise((resolve) => {
		laserGun.firing = true;
		resolve([x,y,z]);
	})
}

function moveAndFire(x,y,z){
	adjustPosition(x,y,z).then(coord => {
		console.log(`Arma ajustada para as coordenadas(${coord[0]}, ${coord[1]}, ${coord[2]})`);
		return fire(...coord)
	}).then(coord => {
		console.log(`Começando a atirar nas coordenadas(${coord[0]}, ${coord[1]}, ${coord[2]})`);
	})
}

*/

// Podemos substituir as estruturas de Promise e colocar async functions no lugar.
// Ainda empregando o then

/*

async function adjustPosition(x,y,z){
	if(z > 9){
		return Promise.reject("ângulo z inválido.");  // tratamento de erro em uma async function
	}
	laserGun.currentPosition = [x,y,z];
	return [x,y,z];
}

async function fire(x,y,z){
	laserGun.firing = true;
	return [x,y,z];
}

function moveAndFire(x,y,z){
	adjustPosition(x,y,z).then(coord => {
		console.log(`Arma ajustada para as coordenadas(${coord[0]}, ${coord[1]}, ${coord[2]})`);
		return fire(...coord)
	}).then(coord => {
		console.log(`Começando a atirar nas coordenadas(${coord[0]}, ${coord[1]}, ${coord[2]})`);
	}).catch(error => console.log(error));
}

*/


// Substuindo os then por await temo o retorno diredo das promises.
// Porém para o tratamento de error temos de empregar try{}catch{};


async function adjustPosition(x,y,z){
	if(z > 90){
		return Promise.reject("ângulo z inválido.");  // tratamento de erro em uma async function
	}
	laserGun.currentPosition = [x,y,z];
	return [x,y,z];
}

async function fire(x,y,z){
	laserGun.firing = true;
	return [x,y,z];
}

async function moveAndFire(x,y,z){
	try{
		let posicaoAjustada = await adjustPosition(x,y,z);
		console.log(`Arma ajustada para as coordenadas(${posicaoAjustada[0]}, ${posicaoAjustada[1]}, ${posicaoAjustada[2]})`);
	
		let fireStatusPosition = await fire(x,y,z);
		console.log(`Começando a atirar nas coordenadas(${fireStatusPosition[0]}, ${fireStatusPosition[1]}, ${fireStatusPosition[2]})`);
	}catch(error){
		console.log(`Deu: ${error}`);
	}
}



moveAndFire(20,40,10);