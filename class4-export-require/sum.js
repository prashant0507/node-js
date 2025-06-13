function sum(a, b) {
    const c = a + b;
    console.log(c);
}

var surName = 'Shrivastava';

// module.exports = sum; // export single method 

// module.exports = {
//     surName: surName,
//     sum: sum
// }

module.exports = {surName, sum}