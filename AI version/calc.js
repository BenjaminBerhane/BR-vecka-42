const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

let currentInput = "";
let firstNumber = null;
let operator = null;
let result = null;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "C") {
            currentInput = "";
            firstNumber = null;
            operator = null;
            result = null;
            display.value = "";
        } else if (value === "=") {
            if (operator && currentInput) {
                result = calculate(firstNumber, parseFloat(currentInput), operator);
                display.value = result;
                firstNumber = result;
                currentInput = "";
                operator = null;
            }
        } else if (button.classList.contains("operator")) {
            if (currentInput) {
                firstNumber = parseFloat(currentInput);
                currentInput = "";
            }
            operator = value;
        } else {
            currentInput += value;
            display.value = currentInput;
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
            return num1 / num2;
        default:
            return num2;
    }
}
