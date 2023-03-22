const chalk = require('chalk')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

const address = process.argv[2]

if (address){
    geocode(address, (error, geocode_response) => {
        if (error){
            return console.log(error)
        }
        
        weather(geocode_response.latitude, geocode_response.longitude, (error, weather_response) => {
            if (error){
                return console.log(error)
            }
    
            console.log(chalk.cyan(geocode_response.name))
            console.log(chalk.cyan('It is ' + chalk.green(weather_response.condition) + ' outside and the temperature is ' + chalk.green(weather_response.temperature + '°C')))
        })
    }) 
}
else{
    console.log(chalk.redBright('Kindly provide a valid location as an argument'))
}


