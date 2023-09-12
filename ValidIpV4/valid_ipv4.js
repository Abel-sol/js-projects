function validIP(ip){
   const address =  ip.split('.');
   if (address.length !== 4) return false;

   const valid = address.every( (n) => (parseInt(n) >= 0 && parseInt(n) <= 255 ))

    return valid;
}

console.log(validIP("123.22.12.66"));