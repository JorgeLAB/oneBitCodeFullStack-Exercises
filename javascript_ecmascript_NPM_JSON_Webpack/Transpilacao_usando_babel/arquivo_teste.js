function codigoEmVersaoNova(text1,text2,){
	// repare na presença da vírgula no final um recurso ES8
	// quando rodar o babel ocorrerar a transpilação para um versão antiga removendo a vírgula.
	
	// Agora, ao usarmos npx babel arquivo_teste.js -o arquivo_transpilado_em_es5.js --presets=@babel/preset-env 
	// Notaremos uma mudança no resultado isso porque a versão es5 não suporta interpolação.

	alert(`${text1}\n${text2}`);
}

// nós estamos colocando uma Promise já que a versão ES5 não suporta.
// Assim o comportamentamento do corejs depois de configurar o arquivo babel.config.js.
// será importar os pacotes necessário para a execução de uma Promise na versão ES5. 

let Promise = Promise.resolve();
