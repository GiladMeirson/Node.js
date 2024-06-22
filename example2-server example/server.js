const http = require('http');
const port = 3000;
//const allowedOrigins = ['http://example.com', 'http://another-example.com'];

// Create an HTTP server
const server = http.createServer((req, res) => {

  // Get the origin of the request
  //const origin = req.headers.origin;

  // Check if the origin is allowed
  // if (allowedOrigins.includes(origin)) {
  //   // Set CORS headers
  //   res.setHeader('Access-Control-Allow-Origin', origin);
  //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  //   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // }
 
  if (req.method === 'GET') {
    if (req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello, GET request!',timeStamp:new Date().getTime() }));
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found cant find this request '+req.url);
      }
  } 
  else if (req.method === 'POST') {
    if (req.url === '/hello') {
      let data = '';
      // If the request is JSON, read the data.
      if (req.headers['content-type'] === 'application/json') {
        req.on('data', (chunk) => {
          data += chunk;
          
        });

        req.on('end', () => {
          const jsonData = JSON.parse(data);
          console.log(jsonData);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: `Hello, POST request! You sent: ${JSON.stringify(jsonData)}` }));
        });
      }
      else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('the data id not in JSON '+req.url);
      } 
    }
    else {
        // Respond with a 404 Not Found error
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      }
  }
});

// Listen for incoming requests on port 3000
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
