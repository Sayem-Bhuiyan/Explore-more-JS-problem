// find the longName from an array

function bestFriend(arr){
    let maxChar = arr[0];
    for(let i = 0; i < arr.length; i++){
        if( maxChar.length < arr[i].length){
            maxChar = arr[i];
        }
    }
    return maxChar;
}

const names = ['Sayem Bhuiyan', 'Ashraful Islam Akash', 'MD. Shajib Sarker',
                'Tipu Ahsan'];

const bigName = bestFriend(names);
console.log(bigName);              