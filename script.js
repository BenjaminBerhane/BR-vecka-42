// Number input function

function getNumberInput(promptText) {
    let userInput = prompt(promptText).replace(",", ".");
    let numberVariable = parseFloat(userInput);
    
    while (isNaN(numberVariable)) {
        userInput = prompt("WRONG INPUT! " + promptText).replace(",", ".");
        numberVariable = parseFloat(userInput);
    }
    
    return numberVariable;
}

// Function to get a valid operator
function getOperatorInput() {
    const validOperators = ["+", "-", "*", "/"];
    let operator = prompt("Enter operator");
    
    while (!validOperators.includes(operator)) {
        operator = prompt("WRONG INPUT! Enter a valid operator (+, -, *, /):");
    }
    
    return operator;
}

// First number input
const aVariable = getNumberInput("Enter a number");

// Operator selection
const operatorVariable = getOperatorInput();

// Second number input
let bVariable = getNumberInput("Enter another number");

// Handle division by zero
while (operatorVariable === "/" && bVariable === 0) {
    bVariable = getNumberInput("Can't divide by 0. Enter another number:");
}

// Perform the calculation
let result;
switch (operatorVariable) {
    case "+":
        result = aVariable + bVariable;
        break;
    case "-":
        result = aVariable - bVariable;
        break;
    case "*":
        result = aVariable * bVariable;
        break;
    case "/":
        result = aVariable / bVariable;
        break;
    case "**":
        result = aVariable ** bVariable;
        break;
    case "^": //alternative way of requesting ** operator
        result = aVariable ** bVariable;
        break;
    case "%":
        result = aVariable % bVariable;
        break;
    
}

// Display result
alert(`Result: ${result}`);
console.log(`${aVariable} ${operatorVariable} ${bVariable} = ${result}`);