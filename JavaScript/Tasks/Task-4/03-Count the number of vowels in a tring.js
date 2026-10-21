// Write a function to count the number of vowels in a string.

function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

let inputString = "Hello, how many vowels are in this string?";
let vowelCount = countVowels(inputString);

console.log(vowelCount);

