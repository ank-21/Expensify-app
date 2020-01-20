const add = (a,b) => a+b;

test('should add two numbers', () => {
    const result = add(3,4);
    if(result !== 7)
        throw new Error(`The result obtain is ${result} and expected it to be 7`)
})