let firstNum = 0;
let secondNum = 0;
let userInput;
let value = 0;
function reset(){
updateNumbers()
value = 0;
document.getElementById("points").innerHTML = value;
}
function updateNumbers(){
firstNum = getRandomNumber()
secondNum = getRandomNumber()  
document.getElementById("firstNum").innerHTML = firstNum;
document.getElementById("secondNum").innerHTML = secondNum;
}

function getRandomNumber(){
return Math.round(Math.random() * 11);

}

function submit(){
userInput = document.getElementById("app").value;

let CorrectSign = getCorrectSign()
if(userInput === CorrectSign){
    value++;
    document.getElementById("points").innerHTML = value;
    updateNumbers()
    
}
}

function getCorrectSign(){
if(secondNum > firstNum){
   return ">"; 
}else if(secondNum < firstNum) {
return "<";
}
else{
    return "="
}

}

























