// Writing our first Node script
const fs = require('fs')
const name = require('./utils.js')

fs.writeFileSync('notes.txt', 'Hello, World.')

// Challenge : Append a message to notes.txt
fs.appendFileSync('notes.txt', '\nMarch 4. 4 AM')

// Using our own files and require them
const app_name = 'NOTES-APP'
console.log(app_name)