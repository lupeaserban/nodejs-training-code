const https = require('https');

const url = 'https://api.weatherstack.com/current?key=value&access_key=f9a2be8a7f1e34792a96a68925a26b22&query=45,-75&units=m';

const options = {
    hostname: 'api.weatherstack.com',
    host: 'api.weatherstack.com',
    path: '/current?key=value&access_key=f9a2be8a7f1e34792a96a68925a26b22&query=45,-75&units=m'
}

const request = https.request(url, (response) => {

    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })

    response.on('end', () => {
       const body = JSON.parse(data);
       console.log(body);
    })
})

//problema de la net, proxy cv. intra pe eroare!

request.on('error', (error) => {
    console.log('An error', error);
});

request.end();
