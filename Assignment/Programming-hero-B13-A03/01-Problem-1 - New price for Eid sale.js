function newPrice(currentPrice, discount) {
    if (Number.isInteger(currentPrice) && Number.isFinite(discount)){
        if(currentPrice > 0 && discount >= 0 && discount <= 100 ){
            const discountPrice = (currentPrice * discount) / 100;
            const discountNewPrice = currentPrice - discountPrice;
            return discountNewPrice.toFixed(3);
        }
    }
    return "Invalid";
}

console.log(newPrice(1500, 20.5));