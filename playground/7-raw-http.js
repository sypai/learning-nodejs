const http =require('http')

const url = 'http://api.weatherapi.com/v1/current.json?key=ac2911ceb99240808f625902232103&q=13.0,77.0'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('ERROR: ', error)
})

request.end()