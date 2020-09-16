// Realizando contagem de dobras espaciais

const realizandoDobra = () => {
	let dobras = 0;
	let escolhaInicial = prompt("Deseja realizar a dobra espacial:\n (1) Sim \n (2) Não");

	while(escolhaInicial == 1){
		dobras++
		escolhaInicial = prompt("Deseja realizar a dobra espacial:\n (1) Sim \n (2) Não");
	}

	alert(`Foram realizadas ${dobras} dobras espaciais.`);
}