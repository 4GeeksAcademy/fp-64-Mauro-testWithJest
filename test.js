const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One dollar should be 153.14 Yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(3.5);
    const expected = 3.5 * 153.14;
    expect(fromDollarToYen(3.5)).toBe(535.99); 
})

test("One Yen should be 0,0052 GBP", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(100);
    const expected = 100 * 0.0052;
    expect(fromYenToPound(100)).toBe(0.52); 
})