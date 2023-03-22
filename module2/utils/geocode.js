const request = require('postman-request')
const chalk = require('chalk')

const url = 'http://api.positionstack.com/v1/forward?access_key=&query=Manyata%20Tech%20Park,%20Bengaluru,%20Karnataka'

request({url: url, json: true}, (error, response) => {
    
    if (error){
        console.log(chalk.redBright('Unable to connect to the Geocode API'))
    }
    else{
        try{
            const json_data = response.body
            const latitude = json_data.data[0].latitude
            const longitude = json_data.data[0].longitude
            console.log(chalk.cyanBright('Latitude: ' + latitude + ' || Longitude: ' + longitude))
        }
        catch(e){
            console.log(chalk.redBright('Unable to fetch data from Geocode API'))
        }
    }
})