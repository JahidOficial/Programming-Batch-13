// Write a javaScript program to check whether a year is a leap year or not.

// Those year that is not divisible by 100 and if the year is divisible by 4: then it will be a leap year;


function isLeapYear (year){
    if(year % 100 != 0 && year % 4 === 0){
        return true;
    }else if(year % 400 === 0){
        return true;
    }else{
        return false;
    }
}

const isLipi = isLeapYear(2100);
console.log(isLipi);