console.log("js loaded");
var nameVar = "Jesus"
var numVar = 5;
console.log(numVar);
numVar = 25;
console.log(numVar);

function myFuction() {
  console.log("this is my first fuction");
}

function comparingNumbers(firstNum, secondNum) {
  console.log("firstNum: " +firstNum+" secondNum: "+secondNum);
  console.log("first number is greater than second number: "+(firstNum<secondNum));
  firstNum = 11;
  firstNum = 12;
  console.log("firstNum: " +firstNum+" secondNum: "+secondNum);
  console.log("first number is greater than second number: "+(firstNum<secondNum));
}

comparingNumbers(2,1);
console.log(numVar);
numVar+= 40;
comparingNumbers(12,18);
console.log(numVar);
