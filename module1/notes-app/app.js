// installed validator, a npm package 
// npm install validator in root directory 
const validator = require('validator')

const {getNotes} = require('./notes.js')

const notes = getNotes()
console.log(notes)

// looking at docs and trying out functions
console.log(validator.isEmail('suyash@ibm.com')) //true
console.log(validator.isURL('898989898')) //false