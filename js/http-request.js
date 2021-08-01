/**
 * Create a server listening on port 8090 using http
 */

const http = require('http');

function server() {
    http.createServer((request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');

        response.write('Now is the time for all good men to come to the aid of their country.');
        response.end();
    }).listen(8090);
}

/**
 * Make a GET request to an https site
 */
function get() {
    const https = require('https');
    const options = {
        host: 'www.metaweather.com',
        path: '/api/location/search/?query=Columbus',
    };
    const callback = function (response) {
        let str = '';

        // another chunk of data has been received, so append it to `str`
        response.on('data', (chunk) => {
            str += chunk;
        });

        // the whole response has been recieved, so we just print it out here
        response.on('end', () => {
            console.log(str);
        });
    };

    https.request(options, callback).end();
}

/**
 * Make a POST request to an http site
 */
// TODO - change to something else as nodejitsu seems busted (3/26/2018)
function post() {
    const http = require('http');
    const options = {
        host: 'www.nodejitsu.com',
        path: '/',
        port: '1337',
        method: 'POST',
    };
    const callback = function (response) {
        let str = '';
        response.on('data', (chunk) => {
            str += chunk;
        });

        response.on('end', () => {
            console.log(str);
        });
    };
    const req = http.request(options, callback);

    req.write('hello world!');
    req.end();
}

/** ****************************************************************************** */

get();
post();
server();
