// REQUIREs
const chalk = require('chalk')
const request = require('postman-request')

// Constants
const url = 'http://api.weatherapi.com/v1/current.json?key=ac2911ceb99240808f625902232103&q=13.050700,77.624382'

request({url: url, json: true}, (error, response) => {
    
    if (error){
        console.log(chalk.redBright('Unable to connect to the Weather API'))
    }
    else{
        try{
            const data = response.body
            const temp = data.current.temp_c
            const condition = data.current.condition.text

            console.log(chalk.cyanBright("It's " + condition + " outside and the temperature is " + temp + " °C"))
        }
        catch(e){
            console.log(chalk.redBright('Unable to fetch data from Weather API'))
        }
    }
    
})