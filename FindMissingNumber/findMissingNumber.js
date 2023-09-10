function findNumber( arr ){
    if ( arr === undefined || arr.length == 0) return undefined;

    let n = arr.length + 1;
    let expectedSum = (n * ( n + 1) )/ 2  // used gauss formula
    
    let actualSum = arr.reduce( (sum, n) => sum + n, 0);

    return expectedSum - actualSum;
}

console.log(findNumber([1,2,3,4,5,7]));