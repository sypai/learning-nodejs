// REQUIREs
const request = require('postman-request')

// Constants
const url = 'http://api.weatherapi.com/v1/current.json?key=4cc9b8b55fa44ab295222857232103&q=13.050700,77.624382'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})