require('./xyz.js');
//const sum1 = require('./sum.js'); // Import, single exported method or var 
//const obj = require('./sum.js');
const {surName, sum} = require('./sum.js');

var name = 'Prashant';
console.log(name);

//sum1(3,4); // Use, single exported method 

//obj.sum(3,4);
//console.log(obj.surName);

console.log(surName);
sum(4,4);