import data1 from "./data1.json";

export const part1 = (data = data1) => {
    const caloriesPerElf = data.map((elfData, index) => {
        return elfData.reduce((previousValue, currentValue, currentIndex, array) => {
            if (index === 0) {
                console.log({previousValue, currentValue});
            }
            return previousValue + Number(currentValue);
        }, 0);
    });

    const maxCalories = Math.max(...caloriesPerElf);

    return {
        caloriesPerElf,
        maxCalories
    };
};

export const part2 = (data = data1) => {
    const { caloriesPerElf } = part1(data);

    function compareNumbers(a, b) {
        return b - a;
    }

    caloriesPerElf.sort(compareNumbers);
    const [top1, top2, top3] = caloriesPerElf;
    const caloriesForTop3 = top1 + top2 + top3;

    return {
        caloriesPerElf,
        caloriesForTop3
    };
};

export default {
    "Part 1": part1(data1)?.maxCalories,
    "Part 2": part2(data1)?.caloriesForTop3
};
