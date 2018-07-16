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
