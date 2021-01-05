"use strict";

require("core-js/modules/es.array.concat");

function codigoEmVersaoNova(text1, text2) {
  // repare na presença da vírgula no final um recurso ES8
  // quando rodar o babel ocorrerar a transpilação para um versão antiga removendo a vírgula.
  // Agora, ao usarmos npx babel arquivo_teste.js -o arquivo_transpilado_em_es5.js --presets=@babel/preset-env 
  // Notaremos uma mudança no resultado isso porque a versão es5 não suporta interpolação.
  alert("".concat(text1, "\n").concat(text2));
}