// require is one of the ways used to import modules to your code
const fs = require('fs'); // Fyle System

// here, we used a method from fs to read a file
// in the function, we pass the name of the file we want to read and the code 
// then, we get the parameters of error and the data from the file
// at last, if we get an error, we print it and return, otherwise we print the text
fs.readFile('text.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log('error: ', err);
        return
    }
    console.log(data);
});

console.log()


