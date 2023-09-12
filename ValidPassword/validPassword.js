function validPassword(password){
    const splittedPassword = password.split();
    const valid = splittedPassword.some( (item) => /[A-Z]/.test(item) && /[a-z]/.test(item) && item.length >= 8)

    
    return valid;
}

console.log(validPassword("123edd"));