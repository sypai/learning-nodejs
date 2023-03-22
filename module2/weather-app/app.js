const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

address = 'Manyata Tech Park, Bengaluru, India'

geocode(address, (error, response) => {
    if (response){
        console.log(response)
    }
})

weather(13.06, 77.61, (error, response) => {
    if (response){
        console.log(response)
    }
})