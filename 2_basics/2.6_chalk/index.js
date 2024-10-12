// we have imported chalk and it is ready to be used.
const chalk = require('chalk');

// the variable 'grade' is a random value between 0 and 10, that chnages everytime I run the app
const grade = (Math.random()* 10).toPrecision(2);

// here is a conditional, if the grade is bigger than 6, the person is approved, otherwise they're not
// and to make it more visible, the positive results are going to be printed in green, while the negative results are going to be printed in red
if(grade > 6){
    console.log(chalk.green(`Congratulations! You got a ${grade} and you are approved!`))
} else {
    console.log(chalk.red(`I'm sorry, your ${grade} is not enough and you have been not been approved.`))
}