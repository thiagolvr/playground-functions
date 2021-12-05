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
//NOTA: aqui usei uma função do js '.split' que separa uma string recebida em palavras, com o divisor sendo uma string vazia separada por aspas e espaço
function splitSentence(string) {
    
    let array = string.split(" ")
    return array


}


// Desafio 4
// NOTA: Inicialmente pensei tentei usar o for, mas percebi depois que como se trata da primeira e última posição daria pra acessá-la diretamente através de parâmetros. Crei duas variáveis, uma para cada posição, entretando, novamente, percebi que utilizando apenas uma única varíavel seria mais fácil e rápido de adicionar a vírgula e o espaço, junto as dois índices
function concatName(arrayAlvo) {

  let concatResult 

    concatResult = (arrayAlvo.pop() + "," + " " + (arrayAlvo[0]));
  //outra forma de fazer 
  //concatResult = (arrayAlvo[arrayAlvo.length -1] + "," + " " + (arrayAlvo[0]));
  
      return concatResult 
  }

// Desafio 5
//NOTA: Somente uma única variável foi necessária com a soma dons dois itens (wins e ties) com suas respectivas condições adicionadas
function footballPoints(wins, ties) {
    
  //cada vit vale 3 e cada empate 1

    let pointResult = ((wins * 3) + (ties * 1));

      return pointResult

}

// Desafio 6
//NOTA: Utilizando o for in (para percorrer os valores), utilizei uma variável contadora (para ser incrementada), e uma variável como o número máximo daquela array para fins comparativo no for (index), e validado tal condição a variável contadora será incrementada em +1
function highestCount(arrayNumbers) {

    let contador = 0;
    let maxNumber = Math.max(...arrayNumbers);

    for (let index of arrayNumbers) {
        if (index === maxNumber) {
          contador ++
        }
      }
      
      return contador

}

// Desafio 7
//NOTA: o Math.abs converte os valores para um número absoluto (ignorando seu sinal) facilitando a comparação que vamos usar no if
function catAndMouse(mouse, cat1, cat2) {

  let case1 = Math.abs(cat1 - mouse)
  let case2 = Math.abs(cat2 - mouse)

  if (case1 === case2){
    return "os gatos trombam e o rato foge"
  } else if (case1 < case2){
    return "cat1"
  } else {
    return "cat2"
  }

}

// Desafio 8
//NOTA: criei uma variável tipo array (result) para armazenar o resultado, utilizei o for para varrer a array, validar e adicionar os match no result usando operadores de comparação, sendo o result retornado após a conclusão do for
function fizzBuzz(array) {
  let result = [];

  for(let index = 0; index < array.length; index ++) {
    
    if(array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push('fizzBuzz');

    } else if(array[index] % 3 === 0) {
      result.push('fizz');

    } else if(array[index] % 5 === 0) {
      result.push('buzz');

    } else{
      result.push('bug!');
    }
  }
  return result;
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
