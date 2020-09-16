const painelControle = () => {
 let nomePiloto = prompt("Qual o nome do pilo ?");
 let velocidadeNave = 0

 let atualizarVelocidade = prompt("Quanto deseja-se acelerar");
 while(!confirm(`Deseja realizar a aceleração: velocidade atual ${velocidadeNave} km/s?`)){
 	atualizarVelocidade = prompt("Quanto deseja-se acelerar");
 }

 velocidadeNave += Number(atualizarVelocidade);

 if(velocidadeNave <= 0){
 	alert("Nave encontra-se aparada considere partir e aumentar a velocidade.")
 }else if(velocidadeNave < 40){
 	alert("Você está devagar podemos aumentar mais.") 	
 }else if(velocidadeNave >= 40 && velocidadeNave < 80){
 	alert("Parece uma boa velocidade para mater.")
 }else if(velocidadeNave >= 80 && velocidadeNave < 100){
 	alert("Velocidade alta considere diminuir.")
 }else if(velocidadeNave >= 100){
    alert('Velocidade perigosa. Controle automático acionado.')
 }else{
 	alert("Algo está errado.")
 }

 alert(`O nome do piloto é ${nomePiloto}.\n A velocidade da nave é de ${velocidadeNave} km/s. `)

}