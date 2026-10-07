const mobiles = [
    {name: 'Apple', price: 100000, camera: '12mp', colour: 'black'},
    {name: 'Samsung', price: 90000, camera: '40mp', colour: 'gold'}, 
    {name: 'Walton', price: 130000, camera: '30mp', colour: 'black'}, 
    {name: 'Oppo', price: 34000, camera: '45mp', colour: 'white'}, 
    {name: 'Xiaomi', price: 76000, camera: '23mp', colour: 'pink'}
]

function getMaxPhone(phones){
    let max = phones[0];
    for(phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}

const high = getMaxPhone(mobiles);
console.log("Highest price phone is: ", high);