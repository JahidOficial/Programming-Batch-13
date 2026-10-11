// first 100 --> 100
// 101 to 200 --> 90
// above 200 --> 70

function layeredDiscount(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }else{
        // quantitty = 250
        const first100Total = 100 * first100Price; // 100 * 100 = 10000
        const second100Total = 100 * second100Price; // 100 * 90 = 9000
        const remainingQuantity = quantity - 200; // 250 - 200 = 50
        const remainingTotal = remainingQuantity * above200Price; // 50 * 70 = 3500
        
        const total = first100Total + second100Total + remainingTotal; // 10000 + 9000 + 3500 = 22500
        return total;
    }
}

const total = layeredDiscount(250);
console.log("Total discount cost: ", total);