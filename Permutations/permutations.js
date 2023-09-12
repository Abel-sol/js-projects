function permutation(str){
    const result = [];

    if (str.length === 0){
        result.push("");
        return result;
    }

    for (let i = 0; i < str.length; i++){
        
        const firstLetter = str[i];
        const restOfLetters = str.slice(0, i) + str.slice(i + 1);
        const permutations = permutation(restOfLetters);

        for (let j = 0; j < permutations.length; j++){
            result.push(firstLetter + permutations[j]);
        }
    }

    return result;
}

console.log(permutation("abc"));