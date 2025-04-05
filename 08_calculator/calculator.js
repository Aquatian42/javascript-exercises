const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arrayInput) {
	let output = 0
  for (item of arrayInput){
    output += item
  }
  return output
};

const multiply = function(arrayInput) {
  let output = 1
  for (item of arrayInput){
    output *= item
  }
  return output
};

const power = function(num, exponent) {
	return num ** exponent
  // let output = num;
  // for (i = 1; i < exponent; i++){
  //   output *= num
  // }
  // return output
};

const factorial = function(num) {
  let output = 1
	for (let i = 1; i <= num; i++){
    output *= i
  }
  return output
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
