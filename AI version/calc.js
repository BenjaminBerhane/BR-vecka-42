const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

let currentInput = "";
let firstNumber = "";
let operator = "";
let result = null;
let history = []; // Array för att lagra historiska uträkningar som en string

    // Vad den gör: Detta är en loop (foreach) som går igenom alla knappar och sätter en händelselyssnare på varje knapp. Varje gång en knapp klickas, körs koden som finns inuti funktionen.
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.innerText; // Vad den gör: Denna rad hämtar texten som finns inuti knappen (t.ex. "C", "=", "1", "+", etc.) och lagrar den i variabeln value.

            // Vad den gör: Om knappen som klickades är "C" (Clear), rensas alla variabler och displayen på skärmen. Den här delen av koden återställer allt så att du kan börja om.
        if (value === "C") {
            currentInput = firstNumber = operator = result = display.value = ""; //more compact writing for clearing multiple variables  

        // Den här koden ser till så "." omvandlas till "0." om man börjar med det. Annars kommer "." läggas till i inputen förutsatt att den inte redan har "."
        } else if (value === ".")  {
            if (currentInput === "") {
                currentInput = "0.";
                display.value = `${firstNumber} ${operator} ${currentInput}`;}
                else if (!currentInput.includes(".")) {
                    currentInput += ".";
                    display.value = currentInput; 
                }

        // Vad den gör: Om knappen som klickades är "=", betyder det att användaren vill se resultatet av sin uträkning. Här kontrollerar vi om det finns ett giltigt operator och ett aktuellt nummer. Om allt är korrekt, anropar vi calculate-funktionen med firstNumber, currentInput (det andra talet), och operatorn. Resultatet visas på skärmen, och firstNumber uppdateras till resultatet så att användaren kan fortsätta räkna vidare.
        } else if (value === "=") {
            if (operator && currentInput) {
                result = calculate(firstNumber, parseFloat(currentInput), operator);
                result = result == null ? firstNumber : result;// assigns first number value to result, so that we can continue after failed division or % by 0 
               
                 // Lägg till uträkningen i historik om den är giltig med !==null, med hjälp av history push alltså efter man klickat = läggs den till
                 if (result !== null) {
                    history.push(`${firstNumber} ${operator} ${currentInput} = ${result}`);
                }
                
                display.value = parseFloat(result.toFixed(2)); // displays result and rounds it to 2 decimal places
                firstNumber = result;
                currentInput = "";
            }

            // Vad den gör: Om knappen som klickades är en operator (som "+", "-", "*", "/"), lagrar vi det första talet i 
            //!firstNumber 
            //och sparar operatorn som användaren valde. currentInput återställs för att användaren ska kunna skriva in det andra talet.
            // else if (value === "+" || value === "-" || value === "*" || value === "/")
        } else if (button.classList.contains("operator")) {
            if (currentInput) { 
                result = calculate (parseFloat(firstNumber), parseFloat(currentInput), operator); // a calculation is made whenever a new operator is selected
                result = result == null ? firstNumber : result;// assigns first number value to result, so that we can continue after failed division or % by 0 
                firstNumber = result; // makes continuous calculations possible
                display.value = result; // displays result;
                currentInput = "";
               
            }
            operator = value;
            display.value = `${parseFloat(firstNumber.toFixed(2))} ${operator}`; // displays the operator  /rebecca// 
            
            // Vad den gör: Detta block körs om knappen inte är någon av specialknapparna (som "C", "=", eller en operator). Det betyder att det är en siffra, och vi lägger till den siffran till currentInput, och visar den på displayen.
        } else if (button.classList.contains("history")) {
            showHistory(); // Funktion för att visa historik, alltså läser upp allt som finns inuti "history arrayen"
        } else if (button.classList.contains("clearHistory")) {
            clearHistory(); // Funktion för att rensa historik, alltså radera allt som finns inuti "history arrayen"
        } else {
            currentInput += value;
            
            if (firstNumber === "") {
                display.value = `${firstNumber} ${operator} ${currentInput}`
            }
            else {
            display.value = `${parseFloat(firstNumber.toFixed(2))} ${operator} ${currentInput}`; //se till så att decimalerna på firstNumber avrundas till två tal.
            }
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
        case "/":
            return num2 === 0 ? (alert("Can't divide by 0"), null) : num1 / num2;
        case "%":
            return num2 === 0 ? (alert("Can't mod by 0"), null) : num1 % num2;
        case "^":
            return num1 ** num2;
        default:
            return num2;
    }
}

//funktion för att visa historiken, där alla sparade uträkningar visas med hjälp av "alert" 
function showHistory() {
    if (history.length === 0) {
        alert("Ingen historik tillgänglig.");
    } else {
        alert("Kalkulations Historik:\n" + history.join("\n")); // lägger till alla uträkningar med \n (ny rad)
    }
}

// Funktion för att rensa historiken och logga varje borttagen uträkning
function clearHistory() {
    while (history.length > 0) {
         history.pop(); // Tar bort alla elementet och loggar det
    }
    alert("History cleared.");
}
