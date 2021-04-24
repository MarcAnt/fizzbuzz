const fizzbuzz = require('./fizzbuzz');

describe("fizzbuzz", ()=>{
   

    test("should print 0 if they recieve 0", () => {
        const expected = 0;
        const result = fizzbuzz(0, 3, 5);
        expect(expected).toBe(result);
    });

    test("should print undefined if they receive an empty value", () => {
        const expected = 'Introduce un valor';
        const result = fizzbuzz();
        expect(expected).toBe(result);
    });

    test("if they receive not a number should print ", () => {
        const expected = 'El tipo debe ser un numero';
        const result = fizzbuzz('');
        expect(expected).toBe(result);
    });

    test("should print the number is not multiple of 3 and 5", () => {
        const expected = `No es multiplo de 3 o 5`
        const result = fizzbuzz(2, {x: 3, y: 5});
        expect(expected).toBe(result);
    });

    test("should print fizz if they receive a multiple of 3 ", () => {
        const expected = 'fizz';
        const result = fizzbuzz(3, {x: 3, y: 5});
        expect(expected).toBe(result);
    });

    test("should print buzz if they receive a multiple of 5", () => {
        const expected = 'buzz';
        const result = fizzbuzz(5, {x: 3, y: 5});
        expect(expected).toBe(result);
    });

    test("should print buzz if they receive a multiple of 3 and 5", () => {
        const expected = 'fizzbuzz';
        const result = fizzbuzz(15, {x: 3, y: 5});
        expect(expected).toBe(result);
    });


});

