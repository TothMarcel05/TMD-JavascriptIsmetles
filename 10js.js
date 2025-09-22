let szo = prompt("Szó: ")
let reverse = szo.split("").reverse().join("").toLowerCase().replace(/\s/g, "")

function palindrom(szo)
{
    
    let reverse = szo.split("").reverse().join("").toLowerCase().replace(/\s/g, "")
    if (reverse == szo.split("").join("").toLowerCase().replace(/\s/g, "")) return "Igaz"
    else return "Hamis"


}

console.log("Odafele: " + szo);
console.log("Visszafele: " + reverse);
console.log("Palindrom-e?: " + palindrom(szo));
