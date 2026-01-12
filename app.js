const http = require('http'); // Import the http module
const port = 8080; // Define the port number

const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set the HTTP status code to OK
  res.setHeader('Content-Type', 'text/plain'); // Set the response header
  res.end('Hello World\n'); // Send the response body and end the connection
});

server.listen(port, () => {
  // The server starts listening on the specified port
  console.log(`Server running at http://localhost:${port}/`);
});
