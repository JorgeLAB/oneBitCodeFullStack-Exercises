const baiaNaves = (arr) => {
	let naveComMaisTripulantes = filtrarTribulantes(arr);
	let naveEngate = naveEngatada(arr) + 1;
	let nomeNaves = nomeNavesMaiusculo(arr).join(","); 

	alert(`Dados:\nNaves com mais de 9 tripulates: ${naveComMaisTripulantes}\nA primeira nave engatada posição da plataforma: ${naveEngate}\nNome das naves: ${nomeNaves}`)

}


const filtrarTribulantes = (arr) => {
	let novoArr = arr.filter((elem) => elem[1]>9);
	return novoArr;
}

const naveEngatada = (arr) => {
	return arr.findIndex((elem) => elem[2] == false);
}

const nomeNavesMaiusculo = (arr) => {
	let novoArr = arr.map((elem) => elem[0].toUpperCase());
	return novoArr;
}

const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

baiaNaves(hitchedSpaceships);