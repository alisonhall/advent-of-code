import { part1, part2 } from "./index";

const sampleData = [
    [
        1000,
        2000,
        3000
    ],
    [
        4000
    ],
    [
        5000,
        6000
    ],
    [
        7000,
        8000,
        9000
    ],
    [
        10000
    ]
];

describe("Tests for part1 - Given sample data matches given result", () => {
    const { maxCalories, caloriesPerElf } = part1(sampleData);

    test('First elf has a total of 6000 calories', () => {
        expect(caloriesPerElf?.[0]).toEqual(6000);
    });

    test('Second elf has a total of 4000 calories', () => {
        expect(caloriesPerElf?.[1]).toEqual(4000);
    });

    test('Third elf has a total of 11000 calories', () => {
        expect(caloriesPerElf?.[2]).toEqual(11000);
    });

    test('Fourth elf has a total of 24000 calories', () => {
        expect(caloriesPerElf?.[3]).toEqual(24000);
    });

    test('Fifth elf has a total of 10000 calories', () => {
        expect(caloriesPerElf?.[4]).toEqual(10000);
    });

    test('Max calories is 24000', () => {
        expect(maxCalories).toEqual(24000);
    });
});

describe("Tests for part2 - Given sample data matches given resul", () => {
    const { caloriesPerElf, caloriesForTop3 } = part2(sampleData);

    test('Elf with most calories', () => {
        expect(caloriesPerElf?.[0]).toEqual(24000);
    });

    test('Elf with second most calories', () => {
        expect(caloriesPerElf?.[1]).toEqual(11000);
    });

    test('Elf with third most calories', () => {
        expect(caloriesPerElf?.[2]).toEqual(10000);
    });

    test('Calories for the top 3', () => {
        expect(caloriesForTop3).toEqual(45000);
    });
});
