const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js');

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
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

// Create 'remove' command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Enter the title of the note you want to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.remove(argv.title)
    }
})

// Create 'list' command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create 'read' command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Enter the title of the note you want to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

yargs.parse()