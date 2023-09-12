function reverseString(word){
    if (word === '' ) return '';

    return  reverseString(word.substring(1)) + word[0];
}

console.log(reverseString("abel"));