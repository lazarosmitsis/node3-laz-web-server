const request = require('request')

const forecast = (a, b, callback) => {


    const url = 'http://api.weatherstack.com/current?access_key=be66ba990cf200a964415d9aa9afca04&query=' + a + ',' + b + '&units=m'


    request({ url, json: true }, (error, { body }) => {


        if (error) {


            callback("Cannot connect to weather API", undefined)


        } else if (body.error) {


            callback("Cannot find location", undefined)


        } else {


            callback(undefined, {


                weather_description: body.current.weather_descriptions[0],


                current_temperature: body.current.temperature,


                feels_like: body.current.feelslike


            })


            //         console.log(response.body.current.weather_descriptions[0] + '. Current temperature is ' + response.body.current.temperature + '. Feels like ' + response.body.current.feelslike)


        }


    })


}

module.exports = forecast