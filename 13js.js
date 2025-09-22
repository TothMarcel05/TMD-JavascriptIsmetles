let jegyek = [5, 3, 4, 2, 5, 5, 3]
let db = 0;
let valt = 0
for (let i = 0; i < jegyek.length; i++)
{
    valt += jegyek[i];
    if (jegyek[i] == 5) db++;
}

console.log("Ötösök darabja: " + db)
let atlag = valt / jegyek.length
console.log("Számok átlaga: " + atlag.toFixed(2))