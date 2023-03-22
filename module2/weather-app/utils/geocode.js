const request = require('postman-request')
const chalk = require('chalk')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=&query=' + address 

    request({url: url, json: true}, (error, response) => {
        
        if (error){
            callback(chalk.redBright('Unable to connect to the Geocode API'), undefined)
        }
        else{
            try{
                const json_data = response.body
                const latitude = json_data.data[0].latitude
                const longitude = json_data.data[0].longitude
                const name = json_data.data[0].name
                
                callback(undefined, {latitude: latitude, longitude: longitude, name: name})

            }
            catch(e){
                console.log(chalk.yellow(e))
                callback(chalk.redBright('Unable to fetch data from Geocode API'), undefined)
            }
        }
    })
}

module.exports = geocode