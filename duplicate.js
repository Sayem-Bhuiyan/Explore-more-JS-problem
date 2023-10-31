// remove all the duplicate names form the array and show a unique array.

const names = ['abul', 'babul', 'sabul', 'cabul', 'dabul', 'abul',
 'babul', 'ebul', 'sabul', 'dabul', 'ebul'];

function removeDuplicate(arr){
    let unique = [];
    for( let i = 0; i < arr.length; i++){
        const name = arr[i];
        if( unique.includes(name) === true){
            continue;
        }
        else {
            unique.push(name);
        }
    }
    return unique;
}

let uniqueNames = removeDuplicate(names);
console.log(uniqueNames);


function uniqueNumbers(arr){
    let unique = [];
    for(let i = 0; i < arr.length; i++){
        const number = arr[i];
        if(unique.includes(number) === true){
            continue;
        }
        else {
            unique.push(number);
        }
    }
    return unique;
}
let numbers = [ 11,11, 22, 22, 33, 33, 33, 44, 55, 43, 43, 22, 21, 21];
const newUniqueNumbers = uniqueNumbers(numbers);
console.log(newUniqueNumbers);
