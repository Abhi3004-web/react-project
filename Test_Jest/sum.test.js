const add = require("./sum");

//1. first test cases/////////////
// test('test cases 1', () => {
//     expect(add(1, 2)).toBe(3);
// });
// test('test cases 2', () => {
//     expect(add(5, -2)).toBe(3);
// });
// test('test cases 3', () => {
//     expect(add(10, 2)).toBe(12);
// });
///////////////////////////////////

//2. second test cases ////////////
// test('test object',()=>{
//     expect(add()).toEqual({name:"Abhijit"});
// });

// 3. string test cases
// test('test string', () => {
//     expect(add).toMatch("Hello");
// });

// 4. match string value

// test('test string', () => {
//     expect(add).toMatch(/ll/);
// });

// 5. if string is not matched , how we can check

// test('test string', () => {
//     expect(add).not.toMatch("Heello");
// });

// 6. test callback method

test('test callback method', (done) => {
    function callback(data) {
        try {
            expect(data).toBe("Hello");
            done();
        }
        catch (err) {
            done(err);
        }
    }
    add(callback);
})

