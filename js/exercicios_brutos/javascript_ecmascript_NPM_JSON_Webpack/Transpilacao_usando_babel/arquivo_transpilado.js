function codigoEmVersaoNova(text1, text2) {
  // repare na presença da vírgula no final um recurso ES8
  // quando rodar o babel ocorrerar a transpilação para um versão antiga removendo a vírgula.
  alert(`${text1}\n${text2}`);
}
