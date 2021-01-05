class Nave{

	constructor(name, numTripulantes){
		this.name = name;
		this.numTripulantes = numTripulantes;
		this.portas = false;
		this.engate = false;
	}

	engatar(){
		this.engate = true;
		this.portas = true;
	}
}

const monitorGerenciamento = () => {
	let opcao;
	let arr = []

	while(opcao != 3){
		opcao = prompt(`Escolha um comando:\n(1) Engatar Nave.\n(2) Imprimir Naves.\n(3) Sair do programa.`);

		switch (opcao) {
			case "1":
				let novaNave = cadastrarNave();
				arr.push(novaNave);
				break;
			case "2":
				imprimirNaves(arr)
				break;
			case "3":
			    alert("Saindo do Programa");
			    break;
			default:
				alert("Opção inválida.")
				break;
		}

	}
}


const imprimirNaves = (arr) =>{
	let nomeDeNaves = arr.map(elem => elem["name"])
	alert(`Nome das naves ${nomeDeNaves}`);
}

const cadastrarNave = () => {
	let nome = prompt(`Qual o nome da nave?`);
	let numeroTripulantes = prompt("Qual o número de tripulantes da nave");

	if(nome != "" && numeroTripulantes != ""){
		var naveCadastrada = new Nave(nome, numeroTripulantes);
		naveCadastrada.engatar();
		return naveCadastrada;
	}else{
		alert("Valor invállido para nome ou número de tripulantes.");
	}

}