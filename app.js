const http = require('node:http'); // Import the http module

const hostname = '127.0.0.1'; // Localhost
const port = 8000; // The desired port

// Create an HTTP server that handles requests and returns a response
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set the response status code to OK
  res.setHeader('Content-Type', 'text/plain'); // Set the content type
  res.end('Hello World\n'); // Send the response body
});

// Start the server and make it listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
