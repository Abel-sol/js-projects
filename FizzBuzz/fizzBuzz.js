function fizzBuzzArray(number){

    const value = [];

for (let i = 0; i <= number; ++i){
    if (i % 3 == 0  && i !== 0 && i % 5 !== 0) 
        value.push("Fizz");

     else if ( i % 5 == 0 && i !== 0 && i % 3 !== 0)
        value.push("Buzz");

    else if (i % 3 == 0 && i !== 0 && i % 5 == 0)
        value.push("FizzBuzz");

    else
     value.push(i);
}
return value;
}

console.log(fizzBuzzArray(15));