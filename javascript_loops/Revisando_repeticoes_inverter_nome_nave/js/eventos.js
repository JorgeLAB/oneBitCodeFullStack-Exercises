const inverterNomeNave = () => {
	let nomeNave = prompt("Qual o nome da nave?");
	let letraProibida = prompt("Qual letra será a flag?");
	let nomeNaveIvertido = '';

	for(let j= nomeNave.length-1; j >=0 ; j--){
		if(nomeNave[j] == letraProibida){
			break;
		}else{
			nomeNaveIvertido += nomeNave[j];
		}
	}
	alert(`O nome da nave ivertido é ${nomeNaveIvertido}`);
}