
let fibo = [0, 1];
for( let i = 2; i <= 5; i++){
    let elemet = fibo[i - 1] + fibo [ i - 2];
    fibo.push(elemet);
}
console.log(fibo);