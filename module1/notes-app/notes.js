const fs = require('fs')

const getNotes = function () {
    return 'Your notes...\n'
}
// ADD a new note to notes db (json)

const addNotes = function (title, body) {
    
    // console.log('Loading data')
    notes = loadData()

    const filteredNotes = notes.filter(function (note) {
        return note.title === title
    })
    
    if (filteredNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    }else{
        console.log('Can not add this note.\nA note with the title | ' + title + ' | already exits.')
    }   
}

const saveNotes = function (notes){
    const fileData = JSON.stringify(notes)
    fs.writeFileSync('notes.json', fileData)
}

const loadData = function () {
    try{
        const buffer = fs.readFileSync('notes.json')
        const fileData = buffer.toString()
        const jsonData = JSON.parse(fileData)
        return jsonData

    } catch (e) {
        return []
    }
}

// REMOVE a note with the given title from notes db
const remove = function (title){
    console.log('Removing note with title : | ' + title + ' |')
    
    notes = loadData()

    if (notes.length === 0){
        console.log('You do not have have any notes.')
        return
    }

    const checkNotes = notes.filter(function (note) {
        return note.title === title
    })
    
    if (checkNotes.length === 0){
        console.log('\nCan not remove note.\nThere is no note with the title | ' + title + ' |\n')
        return
    }

    const filteredNotes = notes.filter(function (note) {
        return note.title !== title
    })
    
    saveNotes(filteredNotes)
    console.log('Note removed.')
}

module.exports = { 
    getNotes: getNotes,

    addNotes: addNotes,

    remove: remove
}