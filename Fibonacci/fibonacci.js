function fibonacci(num){
    if (num <= 2)
     return 1;

    return  fibonacci(num - 2) + fibonacci(num-1);
}

console.log(fibonacci(4));