// To use this method of importing express, you need to set "type": "module" in package.json file.
// this is due to nodejs uses commonjs module system by default, which means how js assembles files.
import express from "express";

const app = express();

// app.get('/', (req, res) => {
//     res.send('server is ready');
// })

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
  {
    "id": 1,
    "title": "Parallel Lines",
    "content": "Parallel lines have so much in common. It’s a shame they’ll never meet."
  },
  {
    "id": 2,
    "title": "The Fake Noodle",
    "content": "What do you call a fake noodle? An impasta."
  },
  {
    "id": 3,
    "title": "Outstanding Scarecrow",
    "content": "Why did the scarecrow win an award? Because he was outstanding in his field."
  },
  {
    "id": 4,
    "title": "Elevator Pitch",
    "content": "I recently submitted a joke about an elevator... it worked on so many levels."
  },
  {
    "id": 5,
    "title": "Peaceful Skeletons",
    "content": "Why don't skeletons ever fight each other? They just don't have the guts."
  }
    ]
    res.send(jokes)
})

// Either take it from the environment variable or use 3000 as default port where server is served.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
})
