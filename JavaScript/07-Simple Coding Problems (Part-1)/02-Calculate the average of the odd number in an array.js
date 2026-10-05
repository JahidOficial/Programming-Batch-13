// Write a javaScript program to calculate the average of the odd numbers in an array.

// function takes an array as parameter
// give me the average of the odd numbers in the array

function oddAverage(number) {
    let sum = 0;
    let count = 0;
    for(const num of number){
        if(num % 2 !== 0){
            sum += num;
            count++;
            console.log(num);
        }
    }
    console.log('Sum is: ', sum);
    console.log('Count is: ', count);
    if(count === 0) {
        return 0;
    }
    return sum / count;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 87, 96, 13];
const avg = oddAverage(numbers);
console.log('Average of the odd numbers is: ', avg);