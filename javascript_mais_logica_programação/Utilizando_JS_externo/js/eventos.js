const cacularDiferencaIdade = (idadeMaisNova, idadeMaisVelha) => {
	return (idadeMaisVelha - idadeMaisNova);
}

const pedirIdade = () => {
	let nomeMaisVelha = prompt("Qual o nome da pessoa mais velha? ");
	let idadeMaisVelha = prompt("Qual a idade da pessoa mais velha? ");

	let nomeMaisNova = prompt("Qual o nome da pessoa mais nova?")
	let idadeMaisNova = prompt("Qual a idade da pessoa mais novo?");

	let cacularDiferencaIdades = cacularDiferencaIdade(idadeMaisNova, idadeMaisVelha);
	impressaoResultado(nomeMaisVelha,nomeMaisNova,idadeMaisVelha,idadeMaisNova, cacularDiferencaIdades);

}

const impressaoResultado = (nomeMaisVelha,nomeMaisNova,idadeMaisVelha,idadeMaisNova, diferencaIdade) => {
	alert(`${nomeMaisVelha} possui ${idadeMaisVelha} e é a(o) mais velho.\n ${nomeMaisNova} possui ${idadeMaisNova} e é a(o) mais novo.\n A diferença de suas idades é de ${diferencaIdade}.`)
}