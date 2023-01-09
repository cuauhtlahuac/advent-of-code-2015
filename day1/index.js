const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const goUp = '(';
    const goDown = ")";
    let total = 0;

    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        if (element === goUp) {
            total += 1
        }
        if (element === goDown) {
            total -= 1
        }
    }
    console.log('Total =', total);
});