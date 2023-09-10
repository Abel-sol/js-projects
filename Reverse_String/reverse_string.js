function reverseString(inputString){
  let reveresed="";
  let length = inputString.length - 1;
  for (let i = 0; i < inputString.length; ++i ){
    reveresed += inputString[length - i];
  }
  return reveresed;
}

console.log(reverseString("Hello"));