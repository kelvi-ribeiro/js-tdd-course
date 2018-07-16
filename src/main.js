module.exports = {
  sum:function(number1, number2){
    return number1 + number2;
  },
  sub:function(number1, number2){
    return number1 - number2;
  },
  mult:function(number1,number2){
    return number1 * number2;
  },
  div:function(number1, number2){
    return (number2 === 0) ? 'Não é possível divisão por zero!':number1 / number2;     
  },
}

const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => (num2 === 0) ? 'Não é possível divisão por zero!':num1 / num2;   

export {sum, sub, mult, div};
