export default class Spaceship{
	constructor(name, capacidade, carga){
		this.name = name ;
		this.capacidade = capacidade;
		this.carga = carga;
	}

	percentagemCarga(){
		return (this.carga*100)/this.capacidade;
	}
}