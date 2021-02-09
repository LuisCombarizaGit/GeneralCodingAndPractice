const http = require("http");

http
  .createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: Text/plain

    response.writeHead(200, { "Content-type": "text/plain" });

    response.end("Hello worlppd\n");
  })
  .listen(8081);

console.log("Server running at http//:127.0.0.1:8081/");
