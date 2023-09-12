function arraySum(num){
    if (num.length === 0) return 0;

    return arraySum(num.slice(1)) + num[0];
}

console.log(arraySum([1,2,3,4,5]));