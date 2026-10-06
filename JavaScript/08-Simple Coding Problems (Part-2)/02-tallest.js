const weight = [23, 54, 25, 77, 21, 90, 45];

function getMax(numbers){
    let max = numbers[0];
    for(num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const maxNumber = getMax(weight);
console.log("Maximum weight is: ", maxNumber);