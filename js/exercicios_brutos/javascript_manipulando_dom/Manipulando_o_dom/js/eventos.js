function addPhone(){
	let phoneForm = document.querySelector("form#phones");
	let newPhone = phoneForm.children[0].cloneNode(true);
	let phonePosition = phoneForm.children.length + 1;
	let space = document.createElement("br");

	newPhone.querySelector("label").innerHTML = `<br/>Telefone ${phonePosition}:`
	phoneForm.appendChild(newPhone);	
}

function printPhone(){
	let message = "";

	const phones = document.querySelectorAll("input[name = 'phone']");
	phones.forEach((phone, index) => {
		message += `Telefone ${index+1}: ${phone.value}\n`;
	})

	alert(message);
}