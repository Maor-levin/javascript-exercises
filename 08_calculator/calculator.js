const add = function(...numbers) {
    return numbers.reduce((acc,num) => {
      return acc + num;
},0)
};

const subtract = function(...numbers) {
    return numbers.slice(1).reduce((acc, num) => {
      return acc - num;
    },numbers[0])
};

const sum = function(numbers) {
  return numbers.reduce((acc,num) => {
    return acc + num;
},0)
};

const multiply = function(numbers) {
  return numbers.reduce((acc,num) => {
    return acc * num;
},1)
};

const power = function(num,power) {
  if (power == 0 ) return 1;
  if (power == 1 ) return num;
  let sum = num;

	for (let i = 2 ; i <=power ; i++ ){
    sum = sum*num;
  }
  return sum;
};

const factorial = function(num) {
	if ( num == 0 ) return 1;
  if ( num == 1 ) return 1;
  let result = 1;
  for (let i = 1 ; i<= num ; i++)
    result *= i;
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
