
console.log("Script loaded");

//Our num1 and num2 are going to be the two numbers inputted by the user, seperated by the op
//We alter our num1 until the op is clicked, then every number clicked after is for num2
let num1 = "";
let num2 = "";
let op = "";
let display = "";

//Query select our numpad(0-9), operations(+,-,*,/), and our functions(=,AC)

let numpad = document.querySelector(".calculator .middlerow .numpad");
console.log(numpad);

let operations = document.querySelector(".calculator .middlerow .operation");
console.log(operations);

let functions = document.querySelector(".calculator .middlerow .functions");
console.log(functions);

//Query select our screen so we can update it
let screen = document.querySelector(".calculator #screen");
console.log(screen);

numpad.addEventListener('click',(event) =>{
    if(event.target.textContent.length === 1){
        if(screen.textContent === "NaN"){
            screen.textContent = "0";
        }
        console.log(event.target.textContent);
        if(event.target.textContent === "." && screen.textContent.includes(".")){
            console.log("Duplicate .");
        }
        else if(screen.textContent === "0"){
            if(event.target.textContent === "."){
                screen.textContent += event.target.textContent;
            }
            else{
                screen.textContent = event.target.textContent;
            }
        }
        else{
            screen.textContent += event.target.textContent;
        }
        if(screen.textContent.length > 12){
            screen.textContent = "NaN";
        }
    }
})
