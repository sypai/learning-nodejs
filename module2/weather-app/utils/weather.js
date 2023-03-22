const request = require('postman-request')
const chalk =require('chalk')

const weather = (latitude, longitude, callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=&q=' + latitude + ',' + longitude

    request({url: url, json: true}, (error, response) => {
    
        if (error){
            callback(chalk.redBright('Unable to connect to the Weather API'), undefined)
        }
        else{
            try{
                const data = response.body
                const temp = data.current.temp_c
                const condition = data.current.condition.text
    
                callback(undefined, {condition: condition, temperature: temp})
            }
            catch(e){
                console.log(chalk.yellow(e))
                callback(chalk.redBright('Unable to fetch data from Weather API'), undefined)
            }
        }
    })
}

module.exports = weather