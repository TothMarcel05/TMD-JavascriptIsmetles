//9. f.
let set1 = new Set([1,2,3,4])
let set2 = new Set([3,4,5,6])
function metszet(set1, set2)
{
    let metszet = []
    for (let i = 0; i < set1.length; i++)
        {
            for (let j = 0; j < set2.length; j++)
            {
                if (set1[i] == set2[j]){
                    metszet.push(set2[j]) }
            }
        }  
    return metszet
}

console.log(metszet(set1,set2))