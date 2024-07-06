const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const name = args['name']
const age = args['age']

console.log(name, age)
console.log(`My name is ${name} and I am ${age} years old.`)

// When I type:
// node index.js --name=Matheus --age=17