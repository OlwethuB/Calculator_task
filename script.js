function getID() {
  let BtnID = event.target.id;
  document.getElementById("input").innerHTML += BtnID;
}

function getop() {
  let Btnop = event.target.id;
  document.getElementById("input").innerHTML = Btnop;
}

/* 
// this is to declare the variables that are going to be used...
 let num1=0,
 num2=0,
 opr=' ',
 .numbers= document.querySelectorAll(".calculator-grid .btn-numb"),
  .operations= document.querySelectorAll(".calculator-grid .btn-opr"),
 inputBox= document.getElementID("calculation"),
 clearBox= document.getElementID("clear"),
  delBox= document.getElementID("Deleting"),
// these need to be clicked to work...
  isOprClick= false,
  isEqClick= false,   
  fco= 0;
 
  delBox.onclick= function(){
    inputBox.innerHTML= inputBox.innerHTML.to string (0,"inputBox.innerHTML",-1);
  };

  clearBox.onclick= function(){
     isOprClick= false,
  isEqClick= false,   
  fco= 0,
  num1=0,
  num2=0
  opr=" ",
  calculation.innerHTML="0";
  }

  for(let i=0; i< .numbers.length;i++){
    .numbers[i].onclick= function(){
      if(isOprClick){
        num1=parsefloat(calculation.innerHTML);
        calculation.innerHTML=""
      }
    }
  }
 if(calculation.innerHTML to string().indexOf(".") === -1){
  if ==="0" && this.innerHTML !=="."
  calculation.innerHTML= this.innerHTML;
  isOprClick= false;
 } Else{
  calculation.innerHTML= calculation.innerHTML
 }
*/
