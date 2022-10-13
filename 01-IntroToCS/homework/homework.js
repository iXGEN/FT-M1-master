'use strict';

function BinarioADecimal(num) {

   let output = 0;
  
let splittedNum = num.split('');
  
  for(let i = 0; i < splittedNum.length; i++) {
    if(splittedNum[i] == 1) {
      output += 1 * (2 ** (splittedNum.length - 1 - i))
    }
  }

  return output;


}

function DecimalABinario(num) {
  let output = [];
  
  while(num > 0) {
    output.push(num % 2);
    num = Math.floor(num / 2);
  }
  let string = output.reverse().join('');
  return string.toString();
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
