function isPalindrome( str ) {

  let reversed ="";

  for (let i = str.length -1; i >= 0; --i)
  reversed += str[i];

  if (str === reversed) return true;

  return false;
}

console.log(isPalindrome("mom"));