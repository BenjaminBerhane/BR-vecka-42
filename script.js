// FUNCTIONS
// Number input 
function getNumberInput(promptText) {
    let userInput = prompt(promptText).replace(",", ".").trim(); // .trim() to remove accidental whitespace
    let numberVariable = parseFloat(userInput);
    
    while (isNaN(numberVariable)) {
        userInput = prompt("WRONG INPUT! " + promptText).replace(",", ".");
        numberVariable = parseFloat(userInput);
    }
    
    return numberVariable;
}

// Get a valid operator
function getOperatorInput() {
    const validOperators = ["+", "-", "*", "/", "**", "^"];
    let operator = prompt("Enter operator");
    
    while (!validOperators.includes(operator)) { // runs if/while the input operator does not match validOperators 
        operator = prompt("WRONG INPUT! Enter a valid operator (+, -, *, /, **, ^):");
    }
    
    return operator;
}

// Calculate function 
function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        case "**":
        case "^": // group both cases together
            return a ** b;
        case "%":
            return a % b;
        default:
            throw new Error("Invalid operator");
    }
}

//  START OF INTERACTION

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
let result = calculate(aVariable, bVariable, operatorVariable);


// Display result
alert(`Result: ${result}`);
console.log(`${aVariable} ${operatorVariable} ${bVariable} = ${result}`);

// html output
inputDisplay.innerHTML = aVariable + operatorVariable + bVariable;

resultDisplay.innerHTML = result;