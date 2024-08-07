
console.log("Script loaded");

//Our num1 and num2 are going to be the two numbers inputted by the user, seperated by the op
//We alter our num1 until the op is clicked, then every number clicked after is for num2
let num1 = "";
let num2 = "";
let op = "";
let display = "";

//This boolean is used to determine whether we are looking at num1 or num2 on the screen
//It is flipped whenever an operation is clicked
//opClick is for the numpad to change to analyzing a different number
let n1n2 = false;
let opClick = false;

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
    if(opClick){
        screen.textContent = "0";
        opClick = false;
    }
    
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

operations.addEventListener('click',(event) =>{
    switch(event.target.id){
        case "plus":
            console.log("plus");
            (n1n2) ? num2 = screen.textContent : num1 = screen.textContent;
            n1n2 = !n1n2;
            console.log(num1);
            console.log(num2);
            
            opClick = true;
            break;
        case "minus":
            console.log("minus");
            (n1n2) ? num2 = screen.textContent : num1 = screen.textContent;
            n1n2 = !n1n2;
            console.log(num1);
            console.log(num2);
            opClick = true;
            break;
        case "mult":
            console.log("mult");
            (n1n2) ? num2 = screen.textContent : num1 = screen.textContent;
            n1n2 = !n1n2;
            console.log(num1);
            console.log(num2);
            opClick = true;
            break;
        case "divide":
            console.log("divide");
            (n1n2) ? num2 = screen.textContent : num1 = screen.textContent;
            n1n2 = !n1n2;
            console.log(num1);
            console.log(num2);
            opClick = true;
            break;
    }
});

functions.addEventListener('click',(event) =>{
    switch(event.target.id){
        case "=":
            console.log("=");
            (n1n2) ? num2 = screen.textContent : num1 = screen.textContent;
            console.log( Number(num1) + Number(num2));
            screen.textContent = Number(num1) + Number(num2);
            break;
        case "AC":
            console.log("ac");
            screen.textContent = "0";
            opClick = false;

            break;
    }
});



