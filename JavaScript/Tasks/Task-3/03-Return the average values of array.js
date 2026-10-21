// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function getAverage(numbers, size) {
    let sum = 0;

    for (let i = 0; i < size; i++){
        sum += numbers[i];
    }
    return sum / size;
}

const numbers = [1, 2, 3, 4, 5];
const size = numbers.length;
console.log(getAverage(numbers, size));