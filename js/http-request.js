/*jshint esversion: 6 */

(function () {
    "use strict";

    /** Create a server **/
    let http = require("http");

    http.createServer(function (request, response) {

        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");

        response.write("Now is the time for all good men to come to the aid of their country.");
        response.end();

    }).listen(8090);

    /** Make an http request **/
    //TODO

}());