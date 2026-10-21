const heights2 = [167, 190, 120, 165, 137];

function minNum(numbers) {
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const min = minNum(heights2);
console.log("Min number is: ", min);