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
  appendNumber(number){

  }

  chooseOperation(operation){

  }

  //*DO THE MATH TO COMPUTE A SINGLE VALUE
  compute(){

  }

  //*UPDATE VALUES IN THE OUTPUT
  update(){

  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operatio]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector("[data-delete]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")

//*DEFINE CLASS
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  
})