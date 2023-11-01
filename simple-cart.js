// find the total cost of shoping

const shopingCart = [
    {name:'shoe', price: 1200, quantity: 2},
    { name: 'shirt', price: 1500, quantity: 3},
    { name: 'pant', price: 2100, quantity: 4},
    {name: 'belt', price: 250, quantity: 5}
]

function shopingCost(arr){
    let totalCost = 0;
    for(let i = 0; i < arr.length; i++){
        let productPrice = arr[i].price * arr[i].quantity;
        totalCost = totalCost + productPrice;
    }
    return totalCost;
}
let totalShopingCost = shopingCost(shopingCart);
console.log('Total Shoping Cost is:', totalShopingCost);