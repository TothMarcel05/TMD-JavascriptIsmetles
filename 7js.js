//7. f.
valt = "";
let szavak = ["alma", "körte", "barack"]
function osszefuz(tomb)
 {
    for (let i = 0; i < szavak.length; i++)
    {
        valt += szavak[i] + " ";
    }
    return valt
 }

 console.log(osszefuz(szavak))