import { useState, useEffect } from 'react'
import './App.css'
// We can use fetch to make api calls, but axios provides more production level features.
import axios from 'axios'

function App() {
  const [jokes, setJokes]= useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <>
    <div>Full Stack App</div>
    <p> JOKES: {jokes.length}</p>

    {
      jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <div>{joke.content}</div>
          </div>
        )
      })
    }
    </>
  )
}

export default App
