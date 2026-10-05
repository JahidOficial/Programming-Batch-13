const disha = 56;
const rishabh = 78;

if(disha > rishabh){
    console.log("Disha will get the strawberry.");
}else{
    console.log("Rishabh will get the strawberry.");
}



// inside a function
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

const maxNum1 = getMax(56, 78);
console.log("Max of two is: ", maxNum1);
const maxNum2 = getMax(34, 43);
console.log("Max of two is: ", maxNum2);

const maxNum3 = getMax(maxNum1, maxNum2);
console.log("Max number is: ", maxNum3);





