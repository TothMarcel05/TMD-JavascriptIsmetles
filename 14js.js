let email = prompt("Kérek egy helyes email címet: ")

function emailValidator(email)
{
    if(email.includes("@") && email.includes(".")) return "Helyes"
    else return "Hibás"
}

console.log(emailValidator(email))