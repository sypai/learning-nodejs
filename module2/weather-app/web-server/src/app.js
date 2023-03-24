const path = require('path')
const express = require('express')

// Path to Static files
public_dir_path = path.join(__dirname, '../public')

// Creating our express application
const app = express()

// Setting Template Engine - hbs
app.set('view engine', 'hbs')

// Setting directory path to be used for static files
app.use(express.static(public_dir_path))

// Route '/'
app.get('', (req, res) => {
    res.render('index')
})

app.get('/weather', (req, res) => {
    res.send({
        'forecast': 'Cloudy',
        'location': 'Bangalore'
    })
})

app.listen(3000, () => {
    console.log('SERVER RUNNING ON PORT 3000')
})