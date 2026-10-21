//Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let temperature = 25; // Example temperature in Celsius
let fahrenheit = celsiusToFahrenheit(temperature);

console.log(fahrenheit);