const path = require('path')
const express = require('express')
const hbs = require('hbs');

// Path to Static files
const public_dir_path = path.join(__dirname, '../public')
const views_path = path.join(__dirname, '../templates/views')
const partial_path = path.join(__dirname, '../templates/partials')

// Creating our express application
const app = express()

// Setting Template Engine - hbs
app.set('view engine', 'hbs')
app.set('views', views_path)
hbs.registerPartials(partial_path)

// Setting directory path to be used for static files
app.use(express.static(public_dir_path))

// Route '/'
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Suyash'
    })
})

// Route '/about'

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About us',
        name: 'Suyash'
    })
})

// Route '/help'

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Suyash'
    })
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