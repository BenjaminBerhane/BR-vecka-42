// First number input
let userInput = prompt("Enter a number").replace(",", ".");
let aVariable = parseFloat(userInput);
console.log(userInput, typeof userInput);
console.log(aVariable, typeof aVariable);

while(isNaN(aVariable)){
    userInput = prompt("WRONG INPUT! Enter a number").replace(",", ".");
    aVariable = parseFloat(userInput);
}

// Operator selection
userInput = prompt("Enter operator");
console.log("User input for operator: ",userInput, typeof userInput);
while((userInput !== "+") && (userInput !== "-") && (userInput !== "*") && (userInput !== "/")){
    userInput = prompt("Wrong input! Enter operator");
}
operatorVariable = userInput;

// Second number input
userInput = parseFloat(prompt("Enter another number").replace(",", "."));
while(isNaN(userInput)){
    userInput = parseFloat(prompt("WRONG INPUT! Enter a number").replace(",", "."));

}
while ((userInput == 0) && (operatorVariable == "/")){
    userInput = parseFloat(prompt("Can`t divide by 0. Enter new number"));
}
let bVariable = userInput

// Result
let result; //declares undefined result variable
if (operatorVariable == "+"){
    result = aVariable + bVariable;
    alert(`svar: ${result}`);
    console.log(`${aVariable} ${operatorVariable} ${bVariable} = ${result}`);
}
else if (operatorVariable == "-"){
    result = aVariable - bVariable;
    alert(`svar: ${result}`);
    console.log(`${aVariable} ${operatorVariable} ${bVariable} = ${result}`);
}
else if (operatorVariable == "*"){
    result = aVariable * bVariable;
    alert(`svar: ${result}`);
    console.log(`${aVariable} ${operatorVariable} ${bVariable} = ${result}`);
}
else if (operatorVariable == "/"){
    result = aVariable / bVariable;
    alert(`svar: ${result}`);
    console.log(`${aVariable} ${operatorVariable} ${bVariable} = ${result}`);
}
else {
    alert("Error, not correct input");
    console.log("Error, not correct input");
}
