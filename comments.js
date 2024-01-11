// Create web server
// 1. Load http module
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
// 2. Create http server
http.createServer(function (req, res) {
    // 3. Parse the request containing file name
    var pathname = url.parse(req.url).pathname;
    // 4. Print the name of the file for which request is made.
    console.log("Request for " + pathname + " received.");
    // Read the requested file content from file system
    if (pathname == "/") {