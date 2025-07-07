const prompt = require('prompt-sync')();

function quizApp () {
    let score = 0;
    const ans1 = prompt('What is 2 + 2: ');
    const ans2 = prompt('What is the capital of Japan: ').toLowerCase();
    const ans3 = prompt('What is brand of this laptop: ').toLowerCase();

    if (ans1 === '4') {
        score++;
    }
    if (ans2 === 'tokyo') {
        score++;
    }
    if (ans3 === 'dell') {
        score++;
    }
    console.log('Your score is: ',score);
}

quizApp();