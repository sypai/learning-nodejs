const fs = require('fs')
const chalk = require('chalk')

const saveNotes = (notes) => {
    const fileData = JSON.stringify(notes)
    fs.writeFileSync('notes.json', fileData)
}

const loadData = () => {
    try{
        const buffer = fs.readFileSync('notes.json')
        const fileData = buffer.toString()
        const jsonData = JSON.parse(fileData)
        return jsonData

    } catch (e) {
        return []
    }
}

const readNotes = (title) => {
    notes = loadData()
    requiredNote = notes.find((note) => note.title === title)
    
    if (requiredNote){
        console.log(chalk.inverse("Here's your note\n"))
        console.log(chalk.bold.underline.cyan(requiredNote.title + '\n'))
        console.log(chalk.italic(requiredNote.body+ '\n'))
    }else{
        console.log(chalk.red('\nThere is no note with the title | ' + title + ' |\n'))
    }
}

// LIST all notes from our notes db
const listNotes = () => {
    notes = loadData()

    console.log(chalk.bold.cyanBright.underline('Your Notes\n'))

    notes.forEach((note) => console.log(note.title));
}

// ADD a new note to notes db (json)
const addNotes = (title, body) => {
    
    // console.log('Loading data')
    notes = loadData()

    // even if we get a duplicate note, we are checking the rest of the array
    // which we can skip
    
    // const duplicateNotes = notes.filter( (note) => note.title === title)
    
    const duplicateNote = notes.find( (note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.bgGreen('Your note has been added.'))

    }else{
        console.log(chalk.bgRed('Can not add this note.\nA note with the title | ' + title + ' | already exits.'))
    }   
}

// REMOVE a note with the given title from notes db
const remove = (title) => {
    console.log('\nRemoving note with title : | ' + title + ' |\n')
    
    notes = loadData()

    if (notes.length === 0){
        console.log(chalk.bgYellow('You do not have have any notes.'))
        return
    }

    const checkNotes = notes.filter( (note) => note.title === title)

    if (checkNotes.length === 0){
        console.log(chalk.bgRed('\nCan not remove note.\nThere is no note with the title | ' + title + ' |\n'))
        return
    }

    const filteredNotes = notes.filter((note) => note.title !== title)
    
    saveNotes(filteredNotes)
    console.log(chalk.bgGreen('Your note has been removed.'))
}

module.exports = { 
    readNotes: readNotes,
    listNotes: listNotes,
    addNotes: addNotes,
    remove: remove
}