let n = prompt("Faktoriális: ")
function faktorialis(n){
    let valt = 1;
    for (let i = 1; i <= n; i++) 
    {
        valt= i * valt;
    }
    return valt
}
console.log(faktorialis(n))