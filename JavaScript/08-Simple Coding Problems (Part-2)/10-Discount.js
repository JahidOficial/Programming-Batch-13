function discount(quantity) {
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }else{
       const  total = quantity * 70;
        return total;
    }
}

const total = discount(201);
console.log("The total price is: ", total);