const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names) {
    let smallName = names[0];
    for(const name of names){
        if(name.length < smallName.length){
            smallName = name;
        }
    }
    return smallName;
}

const smallName = smallestName(heights2);
console.log("The small name is: ", smallName);