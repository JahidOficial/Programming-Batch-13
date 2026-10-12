function add(num1, num2){
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}

function calculator(a, b, operator){
    if(operator === 'add'){
        return add(a, b);
    }else if(operator === 'sub'){
        return sub(a, b);
    }else if(operator === "multiply"){
        return multiply(a, b);
    }else if(operator === "division"){
        return division(a, b);
    }else{
        return "Only 'add', 'subtraction', 'multiply', 'division ' operators are allowed";
    }
}

const result = calculator(10, 5, 'add');
console.log("Calculate: ", result);


