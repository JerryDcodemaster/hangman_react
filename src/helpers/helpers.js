export function showNotification(setters) {
    setters(true);
    setTimeout(() => {
        setters(false);
    }, 2000);
}

export function checkWin(correct, wrong, word) {
    let status = 'win';

    // check for current win
    word.split('').forEach(letter => {
        if(!correct.includes(letter)) {
            status = '';
        }
    });

    // check if lose
    if(wrong.length === 6) status = 'lose';

    return status;
}