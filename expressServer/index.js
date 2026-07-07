// 1. Import the Express module
const express = require('express');

// 2. Initialize the Express application
const app = express();

// 3. Define the port you want the server to run on
const port = 3000;

// 4. Create a GET route
// When a user visits the root URL ('/'), this function runs
app.get('/', (req, res) => {
  res.send('Hello, World! This is my GET request response.');
});

app.get('/about', (req, res) => {
  res.send('This is the about route. Likewise multiple routes can be made.');
});

// 5. Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is successfully running on http://localhost:${port}`);
});