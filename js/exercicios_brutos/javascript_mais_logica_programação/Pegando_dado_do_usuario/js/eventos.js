const pedindoNomeUsuario = () =>{
	alert("Bem vindo! A seguir pediremos que informe alguns dados.");
	let nome = prompt("Qual seu nome? ");
	let idade = prompt("Qual sua idade? ");

	while(!confirm(`Está idade está certa: ${idade} anos ?`) == true){
		idade = prompt("Qual sua idade? ");
	}

	alert(`O nome do usuário é ${nome}.\n A idade digitada foi ${idade} anos.`)
}