const computadorBordo = () => {
	let nomeNave = prompt("Qual o nome da nave ?");
	let velocidadeNave = 0;

	let opcao;
	while(opcao != 4){
		opcao = Number(prompt(`Escolha uma opção:\n(1) Acelerar nave 5 km/s.\n(2) Desacelerar nave 5 km/s.\n(3) Imprimir dados da nave.\n (4) Sair do programa.`));
		
		if([1,2,3,4].includes(opcao)){
			switch(opcao) {
				case 1:
					velocidadeNave += 5
					break;
				case 2:
					velocidadeNave -= 5
					break;
				case 3:
					imprimirConsole(nomeNave,velocidadeNave);
					break;
				case 4:
					alert("Saindo do Programa");
					break;
				default:
					alert("Digito errado.")
					break;
			}
			}else{
				alert("Digite novamente o código de opção.")
		}
	}
}

const imprimirConsole = (name,velocidade) => {
	alert(`A velocidade atual a nave ${name} é de ${velocidade}`);
}