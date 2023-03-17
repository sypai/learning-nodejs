const fs = require('fs')

// JSON Object
const book = {
    title: 'Think and Grow Rich',
    author: 'Napolean Hill'
}

console.log(book.title)

// Turning our JSON to string, to write it into a file using fs
const BookString = JSON.stringify(book)
fs.writeFileSync('1-json.json', BookString)

// Reading from file
const buffer = fs.readFileSync('1-json.json')
const fileString = buffer.toString()
const jsonData = JSON.parse(fileString)
console.log(jsonData.author)
