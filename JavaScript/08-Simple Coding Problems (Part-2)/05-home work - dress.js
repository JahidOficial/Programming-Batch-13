// Pant = 700
// Shirt = 400
// Shoes = 1200

function dressQuantity(pantQuantity, shirtQuantity, shoesQuantity){
    const pantPrice = 700;
    const shirtPrice = 400;
    const shoesPrice = 1200;

    const  totalPantCost = pantQuantity * pantPrice;
    const totalShirtCost = shirtQuantity * shirtPrice;
    const totalShoesCost = shirtQuantity * shirtPrice;

    const totalOutfit = totalPantCost + totalShirtCost + totalShoesCost;
    return {
        totalPantCost,
        totalShirtCost,
        totalShoesCost,
        totalOutfit
    };
}

const dress = dressQuantity(3, 5, 2);

console.log("Total Pant Cost: ", dress.totalPantCost);
console.log("Total Shirt Cost: ", dress.totalShirtCost);
console.log("Total Shoes Cost: ", dress.totalShoesCost);
console.log("Total Shooping Cost: ", dress.totalOutfit);