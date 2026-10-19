const products = [
    {id: 1, name: 'Xiami Phone One night', price: 19000},
    {id: 2, name: 'iPhone ', price: 18000},
    {id: 3, name: 'MacBook Air ', price: 98000},
    {id: 4, name: 'Lenovo yoga laptop', price: 78000},
    {id: 5, name: 'Samsung Phone note 8', price: 54000},
    {id: 6, name: 'Nokia Old Phone', price: 8000},
    {id: 7, name: 'Dell laptop', price: 38000},
    {id: 8, name: 'Phone one', price: 45000},
]

function findPhone(products, search) {
    let matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

console.log(findPhone(products, "LAPTOP"));