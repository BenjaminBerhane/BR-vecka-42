const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

let currentInput = "";
//let firstNumber = null;
let firstNumber = "";
/* let operator = null; */
let operator = "";
let result = null;

    // Vad den gör: Detta är en loop som går igenom alla knappar (antagligen en samling av knappar från en miniräknare) och sätter en händelselyssnare på varje knapp. Varje gång en knapp klickas, körs koden som finns inuti funktionen.
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.innerText; // Vad den gör: Denna rad hämtar texten som finns inuti knappen (t.ex. "C", "=", "1", "+", etc.) och lagrar den i variabeln value.

            // Vad den gör: Om knappen som klickades är "C" (Clear), rensas alla variabler och displayen på skärmen. Den här delen av koden återställer allt så att du kan börja om.
        if (value === "C") {
            currentInput = firstNumber = operator = ""; //more compact writing for clearing multiple variables  //rebecca
            //firstNumber = ""; // from null to "" for display /rebecca
            //operator = ""; // from null to "" for display /rebecca
            result = firstNumber; // changed from null to firstNumber /rebecca -- I think this makes it possible to continue calculations right away somehow, when I tried 0 it added a 0 to the calculation
            display.value = "";

        // Den här koden ser till så "." omvandlas till "0." om man börjar med det. Annars kommer "." läggas till i inputen förutsatt att den inte redan har "."
        } else if (value === ".")  {
            if (currentInput === "") {
                currentInput = "0.";
                display.value = currentInput;}
                else if (!currentInput.includes(".")) {
                    currentInput += ".";
                    display.value = currentInput; 
                }

        // Vad den gör: Om knappen som klickades är "=", betyder det att användaren vill se resultatet av sin uträkning. Här kontrollerar vi om det finns ett giltigt operator och ett aktuellt nummer. Om allt är korrekt, anropar vi calculate-funktionen med firstNumber, currentInput (det andra talet), och operatorn. Resultatet visas på skärmen, och firstNumber uppdateras till resultatet så att användaren kan fortsätta räkna vidare.
        } else if (value === "=") {
            if (operator && currentInput) {
                result = calculate(firstNumber, parseFloat(currentInput), operator);
                result = result == null ? firstNumber : result;// assigns first number value to result, so that we can continue after failed division or % by 0 
                display.value = result;
                firstNumber = result;
                currentInput = "";
                console.log("calculate", "firstNumber: ",firstNumber, "currentInput: ", parseFloat(currentInput), "operator: ", operator); // felsökning //rebecca
                //operator = null; // maybe necessary but I removed it as an experiment  //rebecca
                
            }

            // Vad den gör: Om knappen som klickades är en operator (som "+", "-", "*", "/"), lagrar vi det första talet i 
            //!firstNumber 
            //och sparar operatorn som användaren valde. currentInput återställs för att användaren ska kunna skriva in det andra talet.
            // else if (value === "+" || value === "-" || value === "*" || value === "/")
        } else if (button.classList.contains("operator")) {
            if (currentInput) { ////////// ******* this does not have an else fallback*??? ***************//
                result = calculate (parseFloat(firstNumber), parseFloat(currentInput), operator) // a calculation is made whenever a new operator is selected
                result = result == null ? firstNumber : result;// assigns first number value to result, so that we can continue after failed division or % by 0 
                firstNumber = result; // makes continuous calculations possible
                display.value = result;
                currentInput = "";
                //console.log("calculate", "firstNumber: ",firstNumber, "currentInput: ", parseFloat(currentInput), "operator: ", operator); // felsökning //rebecca
            }
            operator = value;
            display.value = `${firstNumber} ${operator}`; // displays the operator  /rebecca// 

            // Vad den gör: Detta block körs om knappen inte är någon av specialknapparna (som "C", "=", eller en operator). Det betyder att det är en siffra, och vi lägger till den siffran till currentInput, och visar den på displayen.
        } else {
            currentInput += value;
            console.log("calculate", "firstNumber: ",firstNumber, "currentInput: ", parseFloat(currentInput), "operator: ", operator); // felsökning //rebecca
            display.value = firstNumber + " " + operator + " " + currentInput;
        }
    });
});

function calculate(num1, num2, operator) {
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

