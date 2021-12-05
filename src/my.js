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
    
    console.log(stringSplit);

    let result = stringSplit.join('');
    return result
  
  
  }
  