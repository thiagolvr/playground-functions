// Desafio 1
//NOTA: o operador && define que a segunda condição só será avaliada caso a primeira seja válida
function compareTrue(p1, p2) {
    if (p1 === true && p2 === true) {
      return true;
    } else 
      return false; 
}

// Desafio 2
// TRIÂNGULO: A fórmula é: (base * altura)/2
//NOTA: vou criar uma variável que receberá os parâmetros base e altura, aplicará essa fórmula e em seguida irei retornar os resultados
function calcArea(base, height) {

    let form = ((base * height) / 2)
    return form
    
    } 


// Desafio 3
//NOTA: Aqui usei uma função do js '.split' que separa uma string recebida em palavras, com o divisor sendo uma string vazia separada por aspas e espaço
function splitSentence(string) {
    
    let array = string.split(" ")
    return array


}


// Desafio 4
// NOTA: Inicialmente pensei tentei usar o for, mas percebi depois que como se trata da primeira e última posição daria pra acessá-la diretamente através de parâmetros. Crei duas variáveis, uma para cada posição, entretando, novamente, percebi que utilizando apenas uma única varíavel seria mais fácil e rápido de adicionar a vírgula e o espaço, junto as dois índices (concatenar)
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
//NOTA: Utilizando o for of (para percorrer os valores), utilizei uma variável contadora (para ser incrementada), e uma variável como o número máximo daquela array para fins comparativo no for (index), e validado tal condição a variável contadora será incrementada em +1
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

  for (let index = 0; index < array.length; index ++) {
    
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push('fizzBuzz');

    } else if (array[index] % 3 === 0) {
      result.push('fizz');

    } else if (array[index] % 5 === 0) {
      result.push('buzz');

    } else {
      result.push('bug!');
    }
  }
  return result;
}


// Desafio 09
//DESABAFO: Pense num desafio que me estressou porque não me toquei que precisava das duas partes estarem completas para passar. Então, só com a encode completada ficava falhando e eu passei a manhã querendo entender o porquê dessa falha. Refiz esse negócio 500x pra saber que era só dar continuidade ao código, que estava tudo certo. "Burro, dá zero pra ele"
//NOTA: Utilizei o split para separar as palavras da string em caracteres isolados para poder analisar com o for um por um de acordo com os requisitos, e depois de fazer as devidas substituições utilizei o join para fazer o caminho reverso do split, transformando os caracteres isolados em palavras novamente
function encode(string) {


  let stringSplit = string.split('');
  
  for (index = 0; index < stringSplit.length; index++) {
    if (stringSplit[index] === 'a') {
      stringSplit[index] = '1';
    } else if (stringSplit[index] === 'e') {
      stringSplit[index] = '2';
    } else if (stringSplit[index] === 'i') {
      stringSplit[index] = '3';
    } else if (stringSplit[index] === 'o') {
      stringSplit[index] = '4';
    } else if (stringSplit[index] === 'u') {
      stringSplit[index] = '5';
    }
  }
  
  let result = stringSplit.join('');
  return result
}

function decode(string2) {
  

  let stringSplit2 = string2.split('');
  
  for (index = 0; index < stringSplit2.length; index++) {
    if (stringSplit2[index] === '1') {
      stringSplit2[index] = 'a';
    } else if (stringSplit2[index] === '2') {
      stringSplit2[index] = 'e';
    } else if (stringSplit2[index] === '3') {
      stringSplit2[index] = 'i';
    } else if (stringSplit2[index] === '4') {
      stringSplit2[index] = 'o';
    } else if (stringSplit2[index] === '5') {
      stringSplit2[index] = 'u';
    }
  }
  

  let result2 = stringSplit2.join('');
  return result2
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
