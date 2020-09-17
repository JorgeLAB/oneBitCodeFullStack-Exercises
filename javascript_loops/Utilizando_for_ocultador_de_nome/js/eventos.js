const modificadorDeNome = () => {
	let nomeNave = prompt("Qual o nome da nave ?");
	let novoNome = "";
	let modificarLetra = prompt("Qual letra deseja-se substituir do nome da nave?");
	let novaLetra = prompt("Qual letra será a substituta ?")

	for(let i=0; i< nomeNave.length; i++){
		if(nomeNave[i] == modificarLetra){
	       novoNome += novaLetra;
		}else{
		   novoNome += nomeNave[i];
		}
	}

	alert(`O novo nome da nave é ${novoNome}`);
}