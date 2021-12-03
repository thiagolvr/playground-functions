// Desafio 1
//NOTA: o operador && define que a segunda condição só será avaliada caso a primeira seja válida
function compareTrue(p1, p2) {
    if (p1 === true && p2 === true) {
      return true;
    } else 
      return false; 
}

// Desafio 2
// NOTA: a fórmula é: (base * altura)/2
//vou criar uma variável que receberá os parâmetros base e altura, aplicará essa fórmula e em seguida irei retornar os resultados
function calcArea(base, height) {

    let form = ((base * height) / 2)
    return form
    
    } 


// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
