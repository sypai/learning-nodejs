const fs = require('fs')

buffer = fs.readFileSync('04-json.json')
bufferToString = buffer.toString()
jsonData = JSON.parse(bufferToString)

jsonData.name = 'Suyash'
jsonData.age = 26

jsonToString = JSON.stringify(jsonData)
fs.writeFileSync('04-json.json', jsonToString)
