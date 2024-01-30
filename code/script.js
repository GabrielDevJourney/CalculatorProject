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
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
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
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    //*if one is empty dont run compute
    if(isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break

      case "-":
        computation = prev - current;
        break

      case "*":
        computation = prev * current;
        break

      case "/":
        computation = prev / current;
        break

      default : 
      return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  //*UPDATE VALUES IN THE OUTPUT
  updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand
    //*display the current to the display that show all operands
    this.previousOperandTextElement.innerText = this.previousOperand
  }
}

//*GETTING ALL ELEMENTS FROM HTML
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

allClearButton.addEventListener('click', () => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
  calculator.delete()
  calculator.updateDisplay()
})

