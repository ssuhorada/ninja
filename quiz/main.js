document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') main();
})

const main = () => {
    const question = "What is Superman's real name?";
    const answer = prompt(question);
    alert(`You answered ${answer}`);
}