// Empregando o this.

const myFirstName = (elem) => {
	alert(`Meu primeiro naome é ${elem.value}`);
}

// Usando o event que um objeto dom que possibilita acessar o último evento realizado.
// usando a propriedade target podemos selecionar qual o elemento que está chamando o evento em nosso dom

const myLastName = () => {
	console.log(event.target.value);
}