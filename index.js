// First number input
let aVariable = parseFloat(prompt("Enter a number"));

while(isNaN(aVariable)){
    aVariable = parseFloat(prompt("WRONG INPUT! Enter a number"));
}

// Operator selection
let operatorVariable = prompt("Enter operator");
while((operatorVariable !== "+") && (operatorVariable !== "-") && (operatorVariable !== "*") && (operatorVariable !== "/")){
    operatorVariable = prompt("Wrong input! Enter operator");
}

// Second number input
let bVariable = parseFloat(prompt("Enter another number"));
while(isNaN(bVariable)){
    bVariable = parseFloat(prompt("WRONG INPUT! Enter a number"));
}

let result;

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
