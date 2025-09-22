let muvelet = prompt("Kérek egy műveletet");
let a = prompt("Kérek egy számot");
let b = prompt("Kérek egy másik számot");
function szamologep(a, b, muvelet)
{
    switch(muvelet){
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            if (a == 0 || b == 0) return "0-val nem osztunk"
            else return a / b
        default: 
            return "Ismeretlen művelet jel"
    }
     
}
console.log(szamologep(a, b, muvelet))