const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!, This is home route');
});

app.get('/about', (req, res) => {
    res.send('This is the about route. Likewise multiple routes can be made.');
})

// It binds your Express application to the port you specified and actively starts listening for incoming network traffic.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// initialize a new empty Node.js project.
// Install Express
// Write the Server Code: index.js
// Run Your Server