const fs = require('fs');

const getExtraArea = (a1, a2, a3) => {
    let smallest = a1;
    smallest = smallest < a2 ? smallest : a2
    smallest = smallest < a3 ? smallest : a3
    return smallest;
}

const getAreas = (l, w, h) => {
    const firstArea = (l * w);
    const secondArea = (w * h);
    const thirdArea = (h * l);

    return {
        firstArea,
        secondArea,
        thirdArea,
    }
}

const getSquareFeet = ([l, w, h]) => {
    const {
        firstArea,
        secondArea,
        thirdArea,
    } = getAreas(l, w, h)
    const extraArea = getExtraArea(firstArea, secondArea, thirdArea);

    return (2 * firstArea) + (2 * secondArea) + (2 * thirdArea) + extraArea;
}

const calculateRibbon = (dimensions = []) => {
    const cloned = [...dimensions];
    const [a, b, c] = cloned.sort(((a, b) => a - b));

    const bow = a * b * c;
    const ribbon = a + a + b + b;
    return ribbon + bow;
}

const calculate = (data) => {
    let total = 0;
    let totalRibbon = 0;
    let dimensions = []
    let current = '';
    for (let index = 0; index <= data.length; index++) {
        const element = data[index];

        if (element === 'x') {
            dimensions.push(Number.parseFloat(current))
            current = '';
            continue;
        }

        if (element === '\n' || element === undefined) {
            dimensions.push(Number.parseFloat(current))
            total += getSquareFeet(dimensions)
            totalRibbon += calculateRibbon(dimensions);
            dimensions = []
            current = '';
            continue;
        }

        current += element;
    }

    return [total, totalRibbon];
}

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const result = calculate(data)
    console.log(result)
    return result;
});
