//*GETTING ALL THE NEEDED NUMBERS
//*function to display the opetaration

let display = document.querySelector('#display');
let currentInput = '';

function appendNumber(num){
  currentInput += num;
  display.value = currentInput;
}

function appendOperator(operator) {
  currentInput += operator;
  display.value = currentInput;
}

function clearDisplay(){
  //*CLEAN BOTH VARIABLE STORING VALUE AND DISPLAY VALUE
  currentInput = '';
  display.value = '';

}


function add(num1,num2){
  return num1 + num2;
}
function subtract(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){

  if (b === 0) {

    console.error("Cannot divide by zero");
    return undefined; // i will see if i return a error or something
  }
  return num1 / num2;
}

let number1;
let number2;
let operators;

function operate(operator, numb1, numb2){
  currentInput = currentInput.toString();
  console.log(currentInput);

  switch (operator) {
    case '+' :

      return add(numb1,numb2);

    case '-' :

      return subtract(numb1,numb2);

      case '*' :

      return multiply(numb1,numb2);

      case '/' :

      return divide(numb1,numb2);

      default:

      console.error('Invalid Operator');
      return undefined //*for now return undefined

    }
}

