const perguntarDistancia = () => {
	let distanciaAnosLuz = prompt("Qual a velocidade em anos luz?");
	let opcaoConversao = prompt("Converter em:\n (1) Parsec (pc) \n (2) Unidade Astrômica (UA) \n (3) Kilometros (km).");

	switch (opcaoConversao) {
		case "1":
			let valorAnoLuzEmParsec = converterParsec(distanciaAnosLuz);
			alert(`Distância em anos Luz: ${distanciaAnosLuz} \n Parsec: ${valorAnoLuzEmParsec}`);
			break;
		case "2":
			let valorAnoLuzEmUA = converterUA(distanciaAnosLuz);
			alert(`Distância em anos Luz: ${distanciaAnosLuz} \n UA: ${valorAnoLuzEmUA}`);
			break;
		case "3":
			let valorAnoLuzEmKm = converterKm(distanciaAnosLuz);
			alert(`Distância em anos Luz: ${distanciaAnosLuz} \n Km: ${valorAnoLuzEmKm}`);
			break;;
		default:
			alert("Valor inválido")
			break;
	}
}

const converterParsec = (anosLuz) => {
	let valor = Number(anosLuz)*0.306601
	return valor;
}

const converterKm = (anosLuz) => {
	let valor = Number(anosLuz)*9.5*Math.pow(10,12)
	return valor;
}

const converterUA = (anosLuz) => {
	let valor = Number(anosLuz)*63241.1
	return valor;
}
