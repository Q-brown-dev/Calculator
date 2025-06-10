//
const number1 = document.getElementById("Num1");
const number2 = document.getElementById("Num2");
const mybutton = document.getElementById("btn");
const Output = document.getElementById("Out");
const mybutton2 = document.getElementById("btn2")
const mybutton3 = document.getElementById("btn3")
const mybutton4 = document.getElementById("btn4")
const mybutton5 = document.getElementById("btn5")
const mybutton22 = document.querySelector("#btn2");
console.log(mybutton22);


let Result = 0;

function Add(Num1, Num2) {
    const number1Int = parseInt(number1.value);
    const number2Int = parseInt(number2.value);
    Result = number1Int + number2Int;
    Output.textContent = Result.toString();
}
mybutton.addEventListener("click", Add);


Result.textContent = Result;
// Subtraction
function Subtract(Num1, Num2) {
    const number1Int = parseInt(number1.value);
    const number2Int = parseInt(number2.value);
    Result = number1Int - number2Int;
    Output.textContent = Result.toString();
}
mybutton2.addEventListener("click", Subtract);

//Division


function Divide(Num1, Num2) {
    const number1Int = parseInt(number1.value);
    const number2Int = parseInt(number2.value);
    Result = number1Int / number2Int;
    Output.textContent = Result.toString();
}
mybutton3.addEventListener("click", Divide);


//Multiplication
function Multiply(Num1, Num2) {
    const number1Int = parseInt(number1.value);
    const number2Int = parseInt(number2.value);
    Result = number1Int * number2Int;
    Output.textContent = Result.toString();
}
mybutton4.addEventListener("click", Multiply);

//Modulo
function Modulo(Num1, Num2) {
    const number1Int = parseInt(number1.value);
    const number2Int = parseInt(number2.value);
    Result = number1Int % number2Int;
    Output.textContent = Result.toString();
}

mybutton5.addEventListener("click", Modulo)


//'42' 42 number