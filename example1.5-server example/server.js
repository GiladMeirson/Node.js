// Import the http module from Node.js to create a server
const http = require('http');

// Define the server port and hostname
const port = 3000;

// Create the server using the http module
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  // Set the response body with the message 'Hello World'
  res.end(JSON.stringify({ message: 'Hello World' }));
});

// Make the server listen on port 3000
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});