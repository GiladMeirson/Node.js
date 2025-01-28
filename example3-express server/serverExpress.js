const express = require('express');
//const cors = require('cors');

const app = express();
const port=3000;




// Use cors middleware to allow all origins
//app.use(cors());

// Middleware to parse JSON data
app.use(express.json());




// Global Middleware example
app.use((req, res, next) => {
    console.log('This is a Genral middleware function');
    next(); // Call next() to pass control to the next middleware or route handler
});


app.get('/hello2', (req, res) => {
  //res.sendFile(path.join(__dirname, 'index.html'));
    console.log('in the request handler for /')
    res.setHeader('Content-Type', 'text/html');
    res.send(`
    <h1>this is HTML file</h1>
    <img src="https://programmerhumor.io/wp-content/uploads/2021/05/programmerhumor-io-stackoverflow-memes-javascript-memes-8ca351880ea513b-758x758.jpg">
    `);
});

//spesiell middleware for /hello
app.use('/hello',(req, res,next) => {
    console.log('This is a for /hello middleware function 2');
    next();

})

app.get('/hello', (req, res) => {
    //res.sendFile(path.join(__dirname, 'index.html'));
      console.log('in the request handler for /hello');
      res.setHeader('Content-Type', 'application/json');
      res.send({
          "name": "John Doe",
          "age": 30
        });

  });

  //no middleware for this api except the global middleware
  app.post('/data', (req, res) => {
    // Access the POST data via req.body
    console.log(req.body);

    // Send a response
    res.setHeader('Content-Type', 'application/json');
    res.send(req.body);
  });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});