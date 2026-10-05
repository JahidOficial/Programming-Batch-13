// Write a javaScript program to remove duplicate items from an array.

// array has some duplicate elements

function noDuplicate(array) {
    const unique = [];

    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 7, 9, 12, 98, 56, 45, 23, 12];
const uniqueArray = noDuplicate(array);
console.log('Unique array is: ', uniqueArray);
