function multiply(num1, num2) {
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "Please provide a number.";
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(5, '6');
// console.log(result);



function fullName(first, second) {
    if(typeof first !== "string" || typeof second !== "string"){
        return 'Please provide a string';
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName("Jahid", "Hossain");
// console.log('Full name is: ', full);




function getPrice(product) {
    if(typeof product !== 'object'){
        return 'Please provide an object.';
    }
    const price = product.price;
    return price;
}

const price = getPrice({name: 'Book', price: 34, color: 'red'});
// const price = getPrice(5)
// console.log(price);




function getSecond(numbers) {
    if(Array.isArray(numbers) === false){
        
    }
    const second = numbers[1];
    return second;
}

const second = getSecond([34, 63, 22]);
console.log(second);
