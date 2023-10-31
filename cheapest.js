// find the cheapest phone from the array.

const phones = [
    {name: 'Samsung', camera: 12, stroage: '32gb', price: 36000, color: 'Black'},
    {name: 'Walton', camera: 10, stroage: '32gb', price: 22000, color: 'Silver'},
    {name: 'iphone', camera: 12, stroage: '32gb', price: 86000, color: 'Black'},
    {name: 'Xaomi', camera: 12, stroage: '32gb', price: 26000, color: 'Silver'},
    {name: 'Oppo', camera: 12, stroage: '32gb', price: 18000, color: 'Silver'},
    {name: 'Vivo', camera: 12, stroage: '32gb', price: 13000, color: 'blue'},
    {name: 'Nothing', camera: 12, stroage: '32gb', price: 60000, color: 'Transparent'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++){
        let phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);