//primeira coisa: vai ter um primeiro parametro que será um array com nomes de tecnologia e um segundo parametro 'name'
// ele basicamente quer que vc crie um objeto contendo um nome de uma tecnologia e um nome de uma pessoa para cada item do array acima, e que os nomes da tecnologia saiam ordenados em ordem alfabetica


function techList(arrayOfTechs, person) {
  //criando uma string tipo array vazia para adiconar os resultados finais
  let result = [];
  //utilizando o parâmetro sort para ordenar o array inicial
  let arraySorted = arrayOfTechs.sort();
  //criando a condição que irá retonar vazio caso o array esteja vazio
  if (arraySorted.length === 0) {
    return 'Vazio!';
 //utilizando o for para percorrer os indices do array ordenado e adicionar um objeto (com uma tech e um nome de uma pessoa) para cada um deles
  } for (let index = 0; index < arraySorted.length; index ++) {
    result.push({ tech: arraySorted[index], name: person });
   
  }
  return result;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
