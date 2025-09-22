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