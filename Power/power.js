function power(base, pow){
    if (pow <= 1) return base;

    return power(base, --pow) * base;
}

console.log(power(2,5));