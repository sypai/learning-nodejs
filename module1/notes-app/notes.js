const fs = require('fs')

const getNotes = function () {
    return 'Your notes...\n'
}

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

module.exports = { 
    getNotes: getNotes,
    addNotes: addNotes
}