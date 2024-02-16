const { add } = require("../arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2,3)).toBe(5);
});


test('500 + 500 is equal to 1000', () => {
    expect(add(500, 500)).toBe(1000);
});

test('1000 + 5290 is equal to 6290', () => {
    expect(add(1000, 5290)).toBe(6290);
})