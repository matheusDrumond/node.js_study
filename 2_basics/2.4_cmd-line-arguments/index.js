// Node provides an array with some data that can be accessed with 'process.argv'
console.log(process.argv)

// Now, if we type:
// > node index.js 
// in terminal we can see the list of aguments

// In the next step we are going to pass one argument to be added in the list by typing
// > node index.js name=matheus
// At this point, the arguments array will have one more item, 'name=Matheus'

// The command line arguments are those things we can write after the script, separated by a space
// It means that wathever I type there will be added to the arguments array
// In an another example, if we type
// > node index.js matheus idade=17 heloWorld
// the arguments array will contain these three more items

// If you are doing the steps with me, you will realize that the array starts already with two elements
// To be more assertive and get only the arguments we pass, let's format the data we get

// Let's pretend that we know that the argument we want is the name

const args = process.argv.slice(2) // Take out the first 2 elements

const nome = args[0].split('=')[1]; // we are getting only what comes after the = signal

console.log(nome)

// this way, when we type:
// > node index.js name=Matheus
// we will get 'Matheus'
// Otherwise, if we type:
// > node index.js name=Sarah
// we will get Sarah as a response