//1. f.
let nev = "TMD";
let kor = 19;
console.log(`Szia ${nev}! ${kor} éves vagy`);

//2. f.
let szam = prompt("Egy számot kérek: ")
szam = Number(szam)
if (szam == 0) {
    console.log("Nulla")
}
else if (szam > 0) {
    console.log("Pozitív")}
else if (szam < 0) {
    console.log("Negatív")}

console.log(szam)

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

//4. f.
let valt = 0;
for (let i = 1; i < 11; i++){
    valt += i;
}
console.log(valt)

//5. f.
let szamok = [3, 7, 2, 9, 5]
console.log(szamok.length)
console.log(szamok[0])
console.log(szamok[szamok.length-1])

valt = 0;
for (let i = 0; i < szamok.length; i++)
{
    valt += szamok[i]
}
console.log(valt)

//6. f.
valt = 0;
let tomb = [3, 7, 2]
function legnagyobb(tomb)
{
    for (let i = 0; i < tomb.length; i++)
        {
            if (tomb[i] > valt) valt = tomb[i];
        }
    return valt
}
console.log(legnagyobb(tomb))
