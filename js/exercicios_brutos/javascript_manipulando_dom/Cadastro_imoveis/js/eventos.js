const mostrarResultado = () => {
	event.preventDefault();
}

const adicionarCasa = () => {
	let numeroResidencial = document.querySelector("form#cadastroCasas input[name='numeroResidencial']").value;
	let bairro = document.querySelector("form#cadastroCasas input[name='bairro']").value;
	let cidade = document.querySelector("form#cadastroCasas input[name='cidade']").value;
	let areaCasa = document.querySelector("form#cadastroCasas input[name='areaCasa']").value;

	let botaoRemover = document.createElement("button");
	botaoRemover.setAttribute("onclick", "removerCasa(this)");
	botaoRemover.setAttribute("class", "button is-danger is-small is-outlined");
	botaoRemover.innerText = "Remover Casa";


	let lista = document.querySelector("div#lista_de_casas ul");
	let line = document.createElement("li");
	line.innerText = `Número da Residência: ${numeroResidencial} / Bairro ${bairro} / Cidade: ${cidade} / Área da Casa: ${areaCasa}  `;
	lista.appendChild(line);
	line.appendChild(botaoRemover);

}

const removerCasa = (elem) => {
	let lista = document.querySelector("div#lista_de_casas ul");
	let line = elem.parentNode
	lista.removeChild(line);
}
