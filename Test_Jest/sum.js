// function add(a, b) {
//     return a + b;
// }

// function add() {
//     return { name: "Abhijit" };
// }

//const add='Hello'

function add(callback) {
    return callback('Hello');
}
module.exports = add;