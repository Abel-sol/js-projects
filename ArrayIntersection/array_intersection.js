function arrayIntersection(firstArr, secondArr){
    const value = []
    for (i = 0; i < firstArr.length; ++i){
        if ( firstArr.includes(secondArr[i])){
            value.push(secondArr[i]);
        }
    }
    return value;
}

console.log(arrayIntersection([1,2,3,4,5], [10, 5, 2, 1, 30]));