function start(quiz) {
    let score = 0;
    // main game loop
    for (const [question, answer] of quiz) {
        const response = ask(question);
        check(response, answer);
    }
    // end of main game loop
    gameOver();
    function ask(question) {
        return prompt(question);
    }

    function check(response, answer) {
        if (response === answer) {
            alert('Correct!');
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver() {
        // At the end of the game, report the player's score
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}

const main = () => {
    const quiz = [
        ["What is Superman's real name?", "Clark Kent"],
        ["What is Wonder Woman's real name?", "Diana Prince"],
        ["What is Batman's real name?", "Bruce Wayne"]
    ];
    start(quiz);
}

document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') setTimeout(main, 100);
})