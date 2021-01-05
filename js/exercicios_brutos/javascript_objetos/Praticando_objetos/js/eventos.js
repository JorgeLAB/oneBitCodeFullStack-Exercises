const minhaNave = {
	nome: "",
	velocidade: 0,
	tipo: "",
	maxVelocidade: 0,
}

function dadosNave(){

	minhaNave.nome = prompt("Qual o nome da nave?");
	minhaNave.tipo = prompt("Qual o tipo da nave?");
	minhaNave.maxVelocidade = Number(prompt("Qual a velocidade máxima da nave?"));

	let opcao = 0;
	
	while(opcao != 2){
		opcao = prompt("Computador de Bordo:\n(1) Deseja acelerar a nave.\n(2) Deseja parar a nave.");
		if(opcao == 1){
			let valorAceleracao = Number(prompt("Quando o senhor deseja acelerar?"));
			if((minhaNave.velocidade+valorAceleracao) > minhaNave.maxVelocidade){
				alert(`Velocidade atual: ${minhaNave.velocidade} - Velocidade Máxima Permitida: ${minhaNave.maxVelocidade}.`);
			}else{
				minhaNave.velocidade += valorAceleracao;
				alert(`Velocidade atual ${minhaNave.velocidade}.`)
			}
		}else if(opcao == 2){
			minhaNave.velocidade = 0;
			alert("Nave foi parada.");
		}else{
			alert("Opção infomada inválida.");
		}
	}
}
