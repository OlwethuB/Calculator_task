// function getID() {
//   let BtnID = event.target.id;
//   document.getElementById("input").innerHTML += BtnID;
// }
// function getop() {
//   let Btnop = event.target.id;
//   document.getElementById("input").innerHTML = Btnop;
// }

let display = document.getElementById('input');
let currentExpression = '';
function getID(id) {
  currentExpression += id;
  display.innerText = currentExpression;
}
function getop(operator) {
  currentExpression += operator;
  display.innerText = currentExpression;
}
function clear() {
  currentExpression = '';
  display.innerText = '';
}
function del() {
  currentExpression = currentExpression.slice(0, -1);
  display.innerText = currentExpression;
}
function calculate() {
  try {
    const result = eval(currentExpression);
    display.innerText = result;
    currentExpression = result;
  } catch (error) {
    display.innerText = 'Error';
  }
}
