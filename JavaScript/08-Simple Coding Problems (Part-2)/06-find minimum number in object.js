const mobiles = [
    {name: 'Apple', price: 100000, camera: '12mp', colour: 'black'},
    {name: 'Samsung', price: 90000, camera: '40mp', colour: 'gold'}, 
    {name: 'Walton', price: 30000, camera: '30mp', colour: 'black'}, 
    {name: 'Oppo', price: 34000, camera: '45mp', colour: 'white'}, 
    {name: 'Xiaomi', price: 76000, camera: '23mp', colour: 'pink'}
]

function getCheapest(phones){
    let min = phones[0];
    for(phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapest(mobiles);
console.log("Cheapest phone is: ", cheap);