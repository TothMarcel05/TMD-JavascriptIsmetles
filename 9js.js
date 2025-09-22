//9. f.
let set1 = new Set([1,2,3,4])
let set2 = new Set([3,4,5,6])
function metszet(set1, set2)
{
    let eredmeny = new Set();
    let tomb1 = Array.from(set1)
    for (let i = 0; i < set1.length; i++)
        {
            for (let j = 0; j < set2.length; j++)
            {
                if (set1[i] == set2[j]){
                    eredmeny.add(set1[i]) }
            }
        }  
    for (let i = 0; i < eredmeny.length; i++)
    {
        return eredmeny[i]
    }
}

console.log(metszet(set1,set2))