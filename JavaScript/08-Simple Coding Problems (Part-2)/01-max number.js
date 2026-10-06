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




// Another example
const jahid = 55;
const sagor = 34;
const emon = 78;

if(jahid > sagor && jahid > emon){
    console.log("Jahid is the ultimate boss.");
}
else if(sagor > jahid && sagor > emon){
    console.log("Sagor is the ultimate boss.");
}
else{
    console.log("Emon is the ultimate boss.");
}




// inside a function
function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

const max = maxOfThree(56, 23, 98);
console.log("Max number is: ", max);




// Another example
const GetMax2 = Math.max(33, 44, 22, 65, 12, 75, 99);
console.log("GetMax2 number is: ", GetMax2);