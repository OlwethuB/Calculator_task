// function getID() {
//   let BtnID = event.target.id;
//   document.getElementById("input").innerHTML += BtnID;
// }
// function getop() {
//   let Btnop = event.target.id;
//   document.getElementById("input").innerHTML = Btnop;
// }
class Calculator {
  constructor(inputTextElement) {
    this.inputTextElement =inputTextElement
    this.clear()
  }
  clear() {
    this.input = ''
    this.operation = undefined
  }
  delete() {
    this.input = this.input.toString().slice(0, -1)
  }
  appendNumber(number) {
    if (numb === '.' && this.input.includes('.')) return
    this.input = this.input.toString() + number.toString()
  }
  Operators(operation) {
    if (this.input === '') {
      this.compute()
    }
    this.operation = operation
    this.input = ''
  }
  compute() {
    let computation
    const current = parseFloat(this.input)
    if (isNaN(input)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.input = computation
    this.operation = undefined
  }
  calculationnum(number) {
    const inputnum = number.toString()
    const decimals = parseFloat(inputnum.split('.')[0])
    const decnum = inputnum.split('.')[1]
    let dDisplay
    if (isNaN(decimals)) {
      dDisplay = ''
    } else {
      dDisplay = decimals.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimals != null) {
      return `${dDisplay}.${decimals}`
    } else {
      return dDisplay
    }
  }
}

updateDisplay(){
this.inputTextElement.innerHTML =
this.calculationnum(this.input)
}



const btnnum = document.querySelectorAll('[data-number]')
const btnopr = document.querySelectorAll('[data-operation]')
const eqls = document.querySelector('[data-equals]')
const del = document.querySelector('[data-del]')
const clear = document.querySelector('[data-clear]')
const inputTextElement = document.querySelector('[data-input]')
const calculator = new Calculator(inputTextElement)
btnnum.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
btnopr.forEach(button => {
  button.addEventListener('click', () => {
    calculator.Operations(button.innerText)
    calculator.updateDisplay()
  })
})
eqls.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})
clear.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})
del.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})










