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
            currentInput = "";
            firstNumber = ""; // from null to "" for display /rebecca
            operator = ""; // from null to "" for display /rebecca
            result = 0; // changed from null to 0 /rebecca
            display.value = "";

            // Vad den gör: Om knappen som klickades är "=", betyder det att användaren vill se resultatet av sin uträkning. Här kontrollerar vi om det finns ett giltigt operator och ett aktuellt nummer. Om allt är korrekt, anropar vi calculate-funktionen med firstNumber, currentInput (det andra talet), och operatorn. Resultatet visas på skärmen, och firstNumber uppdateras till resultatet så att användaren kan fortsätta räkna vidare.
        } else if (value === "=") {
            if (operator && currentInput) {
                result = calculate(firstNumber, parseFloat(currentInput), operator);
                if(result == null){
                    display.value = firstNumber;
                    console.log("firstNumber displayed");
                    result = firstNumber; // assigns first number value to result, so that we can continue after failed division or % by 0
                    console.log("result: ", result);
                    
                    

                } else {
                    display.value = result;
                    console.log("result displayed");
                    
                }
                firstNumber = result;
                currentInput = "";
                operator = null;
                
            }
            
            // Vad den gör: Om knappen som klickades är en operator (som "+", "-", "*", "/"), lagrar vi det första talet i 
            //!firstNumber 
            //och sparar operatorn som användaren valde. currentInput återställs för att användaren ska kunna skriva in det andra talet.
            // else if (value === "+" || value === "-" || value === "*" || value === "/")
        } else if (button.classList.contains("operator")) {
            if (currentInput) {
                firstNumber = parseFloat(currentInput);
                currentInput = "";
            }
            operator = value;

            // Vad den gör: Detta block körs om knappen inte är någon av specialknapparna (som "C", "=", eller en operator). Det betyder att det är en siffra, och vi lägger till den siffran till currentInput, och visar den på displayen.
        } else {
            currentInput += value;
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

