// load 'chalk'
const chalk = require('chalk')

// Processing arguments
args = process.argv // arg vector
console.log(args)

command = args[2]

if (command === 'add'){
    console.log(chalk.bgGrey.whiteBright('Adding note'))
} else if (command === 'remove'){
    console.log(chalk.bgGrey.yellowBright('Removing note'))
}