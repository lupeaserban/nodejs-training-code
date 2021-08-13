const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?key=value&access_key=f9a2be8a7f1e34792a96a68925a26b22&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}&units=m`;

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service1!', undefined);
        } else if (body.error) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                current: body.current.temperature,
                feelslike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast;
