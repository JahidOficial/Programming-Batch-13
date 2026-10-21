// Checking if it's an Array
// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.

let num = [1, 2, 3, 4, 5];
let name = "Rafi";

if(Array.isArray(num)){
    console.log("Num is an array.");
}else{
    console.log("Num is not an Array.");
}

if(Array.isArray(name)){
    console.log("Name is an array.");
}else{
    console.log("Name is not an Array.");
}
