// Here is where the readline module is being imported and used at the same time to set our input/output system
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

// The 'question' method allows us to ask the user for an input and then manipulate it
// In this case, I am getting the user's favorite programming language and then just printing it back
readline.question(
    "What is your favorite programming language? ",
    (language) => {
        console.log(
            `Great to know that your favorite programming language is ${language}`
        );
        readline.close();
    }
);
