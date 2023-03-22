const path = require('path')
const express = require('express')

// Path to Static files
public_dir_path = path.join(__dirname, '../public')

// Creating our express application
const app = express()

app.use(express.static(public_dir_path))

app.get('/weather', (req, res) => {
    res.send({
        'forecast': 'Cloudy',
        'location': 'Bangalore'
    })
})

app.listen(3000, () => {
    console.log('SERVER RUNNING ON PORT 3000')
})