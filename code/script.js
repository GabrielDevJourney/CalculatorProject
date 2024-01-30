class Calculator{
  constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    //*WHEN WE CALL CALCULATOR ALL INPUT WILL BE CLEAR
    this.clear()
  }

  //*CLEAR ALL DISPLAY
  clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  //*DELETE SINGLE CHARACATERS
  delete(){

  }

  //*CLICK NUMBER AND ADD TO DISPLAY
  //*DO NOT LET MULTIPLE DOTS TO BE USED
  appendNumber(number){
    if(number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation){
    //*dont let return if there is no numbers
    if(this.currentOperand === '') return
    //*instead of cleaning the display and showing the current we compute
    //*and show the new value
    if(this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    //*set the display operand to the current 
    this.previousOperand = this.currentOperand
    //*clean the current
    this.currentOperand = ''
  }

  //*DO THE MATH TO COMPUTE A SINGLE VALUE
  compute(){

  }

  //*UPDATE VALUES IN THE OUTPUT
  updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand
    //*display the current to the display that show all operands
    this.previousOperandTextElement = this.previousOperand
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector("[data-delete]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")

//*DEFINE CLASS
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

//*WHEN NUMBER CLICKED APPEND IT AND UPDATE IT TO DISPLAY
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

//*calling for compute when equal is click
equalsButton.addEventListener('click', () => {
  calculator.compute()
  calculator.updateDisplay()
})