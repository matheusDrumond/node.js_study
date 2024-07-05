// path is a module provided by Node
const path = require('path');

// in this example we are just using a ficcional file to understand how to use a core module
const fileName = 'file.pdf'

// then we use the extname function from the module to extract the extension of the file
const extension = path.extname(fileName);

// printing the extension
console.log(extension)