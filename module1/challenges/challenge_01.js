// use fs module, create a file notes.txt and write to it
const fs = require('fs')

fs.writeFileSync('notes.txt', "Hello, World!")

// Append a message to notes.txt
fs.appendFileSync('notes.txt', '\n\nMarch 16, 11 PM')
