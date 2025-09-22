//9. f.
let set1 = new Set([1,2,3,4])
let set2 = new Set([3,4,5,6])

function metszet(set1, set2)
{
    let eredmeny = new Set();
    let tomb1 = Array.from(set1)
    for (let i= 0; i < tomb1.length; i++)
    {
        if (set2.has(tomb1[i]))eredmeny.add(tomb1[i])
    }
     return eredmeny

}

console.log(metszet(set1,set2))