function numberRange(num1, num2){

    if (num1 === num2) return [num1];

    const value = numberRange(num1, num2 - 1);
    value.push(num2);
    return value;
}
console.log(numberRange(1,5));