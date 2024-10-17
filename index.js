let aVariable = parseFloat(prompt("Enter a number"));
let operatorVariable = prompt("Enter operator");
let bVariable = parseFloat(prompt("Enter another number"));
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
