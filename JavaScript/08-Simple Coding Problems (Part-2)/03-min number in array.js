const weight = [23, 54, 25, 77, 21, 90, 45];

function getMin(numbers){
    let min = numbers[0];
    for(num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const minNumber = getMin(weight);
console.log("Minimum weight is: ", minNumber);