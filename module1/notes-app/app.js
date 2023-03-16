// load 'chalk'
const chalk = require('chalk')

const {getNotes} = require('./notes.js')

const notes = getNotes()
console.log(notes)

// Printing 'success'
console.log(chalk.greenBright.bold('Success'))