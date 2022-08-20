function rollDice() {
    let randomNumber = 1 + Math.floor(Math.random() * 6);

    if (randomNumber === 1){
        console.log(`Best Consumer Solution will win the MTN App of the year 2022`);
    }else if (randomNumber === 2){
        console.log(`Best Enterprise Solution will win the MTN App of the year 2022`);
    }else if (randomNumber === 3){
        console.log(`Best African Solution will win the MTN App of the year 2022`);
    }else if (randomNumber === 4){
        console.log(`Most Innovative Solution will win the MTN App of the year 2022`);
    }else if (randomNumber === 5){
        console.log(`Best Gaming Solution will win the MTN App of the year 2022`);
    }else {
        console.log(`Best Educational Solution will win the MTN App of the year 2022`);
    }

    return randomNumber;
  }
  
console.log(rollDice());  