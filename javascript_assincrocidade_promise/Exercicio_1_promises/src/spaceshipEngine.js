import Spaceship from "./spaceship" 

export default class SpaceshipEngine extends Spaceship{
	constructor(name, capacidade, carga){
		super(name, capacidade, carga);
	}

	ligar(){
		return new Promise((resolve,reject) =>{
			let percentagemCombustivel = this.percentagemCarga();
			if(percentagemCombustivel < 30 ){
				reject(`${this.name}. Partida não autorizada carga de ${percentagemCombustivel}%.`);
			}else{
				resolve(`${this.name}. Partida autorizada carga de ${percentagemCombustivel}%.`);
			} 
		}
	)
	}
}