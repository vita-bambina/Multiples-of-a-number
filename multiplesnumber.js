// multiples of a number 
function findMultiples(integer, limit){
    let multiples = [];
    for (let i=integer; i<=limit;i+=integer){
        multiples.push(i);
    
    }
return multiples;
}
console.log (findMultiples(2,6))
console.log (findMultiples(3,10))