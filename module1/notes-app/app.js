const chalk = require('chalk')
const yargs = require('yargs')

// Create 'add' command
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'required title flag for add command - Title of the Note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'required body flag for add command - Contents of the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler : function (argv) {
        console.log('Title : ' + argv.title)
        console.log('Note : ' + argv.body)
    }
})

// Create 'remove' command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler : function () {
        console.log('Removing a note')
    }
})

// Create 'list' command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler : function () {
        console.log('Listing your notes')
    }
})

// Create 'read' command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler : function () {
        console.log('Reading a note')
    }
})

yargs.parse()