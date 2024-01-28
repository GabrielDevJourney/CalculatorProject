//*GETTING ALL THE NEEDED NUMBERS
let currentInput = '';

function appendValue(value){
  console.log("currentInput:", currentInput);
  currentInput += value;
  document.getElementById('display').value = currentInput;
}