const fs = require('fs');

const getExtraArea = (a1, a2, a3) => {
    let smallest = a1;
    smallest = smallest < a2 ? smallest : a2
    smallest = smallest < a3 ? smallest : a3
    return smallest;
}

const getSquareFeet = ([l, w, h]) => {
    const firstArea = (l * w);
    const secondArea = (w * h);
    const thirdArea = (h * l);
    const extraArea = getExtraArea(firstArea, secondArea, thirdArea);

    return (2 * firstArea) + (2 * secondArea) + (2 * thirdArea) + extraArea;
}

const calculate = (data) => {
    let total = 0;
    let dimensions = []
    let current = '';
    for (let index = 0; index <= data.length; index++) {
        const element = data[index];

        if (element === 'x') {
            dimensions.push(current)
            current = '';
            continue;
        }

        if (element === '\n' || element === undefined) {
            dimensions.push(current)
            total += getSquareFeet(dimensions)
            dimensions = []
            current = '';
            continue;
        }

        current += element;
    }

    return total;
}

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const total = calculate(data)
    return total;
});
