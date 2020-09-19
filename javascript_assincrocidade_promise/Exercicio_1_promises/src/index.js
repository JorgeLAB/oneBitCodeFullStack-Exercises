import SpaceshipEngine from "./spaceshipEngine";

const primeiraNave = new SpaceshipEngine("Sophia", 10, 5);
const segundaNave = new SpaceshipEngine("Amsterdã", 14, 10);
const terceiraNave = new SpaceshipEngine("Estrela-anã", 20, 4);




primeiraNave.ligar().then(messagem => alert(messagem)).catch(msg => alert(msg));
segundaNave.ligar().then(messagem => alert(messagem)).catch(msg => alert(msg));
terceiraNave.ligar().then(messagem => alert(messagem)).catch(msg => alert(msg));
