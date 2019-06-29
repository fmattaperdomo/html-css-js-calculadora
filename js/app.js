var display = document.getElementById("display");
var one = document.getElementById("1");
one.addEventListener("click",showScreen); 
//one.addEventListener("onmousedown",showDecrease); 
//one.addEventListener("onmouseup",showIncrease); 
var two = document.getElementById("2");
two.addEventListener("click",showScreen);
var three = document.getElementById("3");
three.addEventListener("click",showScreen);
var four = document.getElementById("4");
four.addEventListener('click',showScreen);
var five = document.getElementById("5");
five.addEventListener('click',showScreen);
var six = document.getElementById("6");
six.addEventListener('click',showScreen);
var seven = document.getElementById("7");
seven.addEventListener('click',showScreen);
var eight = document.getElementById("8");
eight.addEventListener('click',showScreen);
var nine = document.getElementById("9");
nine.addEventListener('click',showScreen);
var zero = document.getElementById("0");
zero.addEventListener('click',showScreen);
var on = document.getElementById("on");
on.addEventListener('click',clearScreen);
var period = document.getElementById("punto");
period.addEventListener('click',addPeriod);
var sign = document.getElementById("sign");
sign.addEventListener('click',addSign);

var operand1 = 0, operand2 = 0, operator=' ';

var division = document.getElementById("dividido");
division.addEventListener('click',addOperator);
var multiplication = document.getElementById("por");
multiplication.addEventListener('click',addOperator);
var minus = document.getElementById("menos");
minus.addEventListener('click',addOperator);
var plus = document.getElementById("mas");
plus.addEventListener('click',addOperator);
var equal = document.getElementById("igual");
equal.addEventListener('click',addOperator);






function makeOperation(number1, number2, accion){
    var result = 0.0;
    switch (accion){
        case "/":
            result = number1 / number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "+":
            result = number1 + number2;
            break;
    }
    return result.toString().substr(0,8);
}

function addOperator(e){
    switch(this.id){
        case "igual":
            operand2 = parseFloat(display.innerHTML);
            display.innerHTML = makeOperation(operand1, operand2, operator).toString();
            break;
        case "dividido": 
            operator = "/";
            operand1 = parseFloat(display.innerHTML);
            display.innerHTML="0";
            break;
        case "por": 
            operator = "*";
            operand1 = parseFloat(display.innerHTML);
            display.innerHTML="0";
            break;
        case "menos": 
            operator = "-";
            operand1 = parseFloat(display.innerHTML);
            display.innerHTML="0";
            break;
        case "mas": 
            operator = "+";
            operand1 = parseFloat(display.innerHTML);
            display.innerHTML="0";
            break;
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
    console.log("sleep");
 }


 function showIncrease(obj){
    console.log("showIncrease");
    obj.style.transition="all 2s ease-in-out";
    console.log(obj.style.transform);
    obj.style.transform="scale(1, 1)";
    console.log(obj.style.transform);
} 

function showDecrease(obj){
    console.log("showDecrease");
    obj.style.transform="scale(0.8, 0.8)";
    obj.style.transition="all 2s ease-in-out";
    setTimeout(showIncrease(obj), 3000);

} 

function showScreen(e){

    showDecrease(this);
    

    if (display.innerHTML.length+1 <= 8){
        if (display.innerHTML == "0"){
            display.innerHTML = this.id;
        }else {
            display.innerHTML += this.id;
        }
    }
    
    
    

}

function clearScreen(e){
    display.innerHTML = 0;
}

function addPeriod(e){
    if (display.innerHTML.indexOf(".") == -1){
        display.innerHTML += ".";
    }
}

function addSign(e){
    if (display.innerHTML.indexOf("-") != -1){
        display.innerHTML = display.innerHTML.substr(1)
    }else {
        display.innerHTML = "-" + display.innerHTML;
    }
}

