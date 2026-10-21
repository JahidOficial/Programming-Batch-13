// Count how many times the a number is repeated in the array.

function countNumber(numbers, find){
    let count = 0;
    for(let number of numbers){
        if(number === find){
            count++;
        }
    }
    return count;
}

let numbers = [5, 6, 11, 12, 98, 5];

console.log(countNumber(numbers, 5));
console.log(countNumber(numbers, 25));