// learned about Math.floor() from chatGPT

function diceRoller() {
    const randomFace = Math.floor(Math.random() * 6) + 1;
    console.log(randomFace);
}

diceRoller();