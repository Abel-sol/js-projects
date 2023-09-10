function sumOfSquarsOfEvenNumbers(arr){

    const evenNum = arr.filter( ( num ) => num % 2 === 0 );
    const square = evenNum.map( ( num ) => num * num );
    const sum = square.reduce( (total, n) => total + n, 0);
    
    return sum;
}

console.log(sumOfSquarsOfEvenNumbers([1,2,3,4,5]));