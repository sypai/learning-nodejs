const express = require('express')

// Creating our express application
const app = express()

app.get('', (req, res) => {
    res.send('<h1>Hello, Express!</h1>')
})

app.listen(3000, () => {
    console.log('SERVER RUNNING ON PORT 3000')
})