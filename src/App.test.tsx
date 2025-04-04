import { CartItem, getItemsTotal } from "./etc/get-items-total"

describe("the application", () => {

    describe("Get items total", () => {
        const specItems: CartItem[] = [];
        const generatedSpecCount = 10;

        for (let i = 0; i < generatedSpecCount; i++) {
            const minValue = 0;
            const maxValue = 1000;

            specItems.push({
                name: `item${i}`,
                cost: Math.random() * maxValue - minValue
            });
        }

        it("should correctly total the items", () => {
            const expected = specItems.reduce((acc, item) => acc + item.cost, 0);
            const total = getItemsTotal(specItems);

            expect(total).toBeCloseTo(expected);
        });

        it("sould throw and error on a negative cost", () => {
            const brokenSpecArr = [
                { name: 'Broken', cost: -10 }
            ];

            expect(() => getItemsTotal(brokenSpecArr)).toThrow();
        });
    })

})