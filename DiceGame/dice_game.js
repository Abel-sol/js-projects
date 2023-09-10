function diceValue(){
    return Math.floor( Math.random( ) * 6) + 1;
}

function diceGame(number){

    const gameResult = []

    for (let i = 1 ; i <= number; ++i){

            let dice1 = diceValue();
            let dice2 = diceValue();
            let sum = dice1 + dice2;
            let result;

            if( sum === 7 || sum === 11) result = "win";
            else if (sum === 2 || sum === 3 || sum === 12) result = "lose";
            else result = "roll again";

        gameResult.push({dice1, dice2, sum, result});
    }
    return gameResult;
}

console.log(diceGame(5));