const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

let currentInput = "";
//let firstNumber = null;
let firstNumber = "";
/* let operator = null; */
let operator = "";
let result = null;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes

// Variables to store values
variables = {
    X: null,
    Y: null,
    Z: null,
    a: null
}
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

    // Vad den gör: Detta är en loop som går igenom alla knappar (antagligen en samling av knappar från en miniräknare) och sätter en händelselyssnare på varje knapp. Varje gång en knapp klickas, körs koden som finns inuti funktionen.
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.innerText; // Vad den gör: Denna rad hämtar texten som finns inuti knappen (t.ex. "C", "=", "1", "+", etc.) och lagrar den i variabeln value.
        console.log("Button clicked:", value); // Log which button was clicked
        console.log("State before click:", {
            currentInput,
            firstNumber,
            operator,
            result,
            variables
        }); // Check the state before processing the click

            // Vad den gör: Om knappen som klickades är "C" (Clear), rensas alla variabler och displayen på skärmen. Den här delen av koden återställer allt så att du kan börja om.
        if (value === "C") {
            currentInput = firstNumber = operator = ""; //more compact writing for clearing multiple variables  //rebecca
            result = firstNumber; 
            display.value = "";
            console.log("Reset performed. State after reset:", {
                currentInput,
                firstNumber,
                operator,
                result,
                variables
            });

<<<<<<< Updated upstream
            // Vad den gör: Om knappen som klickades är "=", betyder det att användaren vill se resultatet av sin uträkning. Här kontrollerar vi om det finns ett giltigt operator och ett aktuellt nummer. Om allt är korrekt, anropar vi calculate-funktionen med firstNumber, currentInput (det andra talet), och operatorn. Resultatet visas på skärmen, och firstNumber uppdateras till resultatet så att användaren kan fortsätta räkna vidare.
=======
        // Den här koden ser till så "." omvandlas till "0." om man börjar med det. Annars kommer "." läggas till i inputen förutsatt att den inte redan har "."
        } else if (value === ".")  {
            if (currentInput === "") {
                currentInput = "0.";
                display.value = `${firstNumber} ${operator} ${currentInput}`;}
                else if (!currentInput.includes(".")) {
                    currentInput += ".";
                    display.value = currentInput; 
                }

        // Equals button ("=") performs the calculation
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        } else if (value === "=") {
            if (operator && currentInput) {
                console.log("Equals button clicked. Current input:", currentInput);
                result = calculate(firstNumber, parseFloat(currentInput), operator);
                result = result == null ? firstNumber : result;// assigns first number value to result, so that we can continue after failed division or % by 0 
                display.value = result;
                firstNumber = result;
                currentInput = "";
                console.log("Calculation performed:", {
                    firstNumber,
                    currentInput,
                    operator,
                    result
                });
                
            }
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            
            // Vad den gör: Om knappen som klickades är en operator (som "+", "-", "*", "/"), lagrar vi det första talet i 
            //!firstNumber 
            //och sparar operatorn som användaren valde. currentInput återställs för att användaren ska kunna skriva in det andra talet.
            // else if (value === "+" || value === "-" || value === "*" || value === "/")
=======
=======
>>>>>>> Stashed changes
            operator = null;

        // Saving the current result to a variable
        // Saving the current result to a variable
        } else if (button.classList.contains("variable")) {
            if (result !== null && operator === "") {
                variableSave(value, result); // Save the result to the chosen variable
                display.value = `${value} = ${variables[value]}`;
            }


        // Operator buttons store the current input and operator
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        } else if (button.classList.contains("operator")) {
            if (currentInput) {
                if (firstNumber !== "") {
                    // Perform a calculation if there's already a first number
                    result = calculate(parseFloat(firstNumber), parseFloat(currentInput), operator);
                    result = result == null ? firstNumber : result; // Handle failed divisions/mod
                } else {
                    // If it's the first operator, set firstNumber to currentInput
                    result = parseFloat(currentInput);
                }
                firstNumber = result.toString(); // Store the result as firstNumber
                display.value = result; // Show the result
                currentInput = "";
            }
            operator = value;
            display.value = `${firstNumber} ${operator}`; // displays the operator

         // What it does: This block is run if the button is not one of the special buttons ("C", "=", or an operator). 
        // It means it's a number, and we add that number to currentInput and show it on the display.
        } else {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            currentInput += value;
            console.log("calculate", "firstNumber: ",firstNumber, "currentInput: ", parseFloat(currentInput), "operator: ", operator); // felsökning //rebecca
            display.value = firstNumber + " " + operator + " " + currentInput;
=======
=======
>>>>>>> Stashed changes
            if (value in variables && variables[value] !== null) {
                currentInput = variables[value].toString();
            } else {
                currentInput += value;
            }
            display.value = `${firstNumber} ${operator} ${currentInput}`;
>>>>>>> Stashed changes
        }
    });
});

function calculate(num1, num2, operator) {
    if (operator == null) return num2;
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "×":
            return num1 * num2;
        case "÷":
            return num2 === 0 ? (alert("Can't divide by 0"), null) : num1 / num2;
        case "%":
            return num2 === 0 ? (alert("Can't mod by 0"), null) : num1 % num2;
        case "^":
            return num1 ** num2;
        default:
            return num2;
    }
}

<<<<<<< Updated upstream
=======
// Variable save function 
function variableSave(selectedVariable, res) {
    if (variables.hasOwnProperty(selectedVariable)) {
        variables[selectedVariable] = res;
    }
}

// Get variable

function getVariable(variableInput) {
    if (variables.hasOwnProperty(variableInput)) {
        return variables[variableInput];
    }
    return null;
}





<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
