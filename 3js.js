//3. f.
let a = 12;
let b = 7;
let c = 20;
if (a > b && a > c) { 
    console.log(`A legnagyobb szám az a, értéke: ${a}`)
}
else if (b > a && b > c)
{ 
    console.log(`A legnagyobb szám az b, értéke: ${b}`)
}
else if (c > a && c > b)
{ 
    console.log(`A legnagyobb szám az c, értéke: ${c}`)
}
else{
    console.log("Egyenlőek")
}