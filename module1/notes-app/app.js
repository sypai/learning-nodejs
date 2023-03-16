const chalk = require('chalk')
const yargs = require('yargs')

// node app.js add --title='My first note'

// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\SuyashBajpai\\Desktop\\#Programming\\nodejs\\module1\\notes-app\\app.js',
//     'add',
//     '--title=My First note'
//   ]
console.log(process.argv)

// { _: [ 'add' ], title: 'My First note', '$0': 'app.js' }
console.log(yargs.argv)