import { useState } from 'react'
import pop from '/popcorn.svg'
import newAgeLogo from './assets/images.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://andrewandrusenko.github.io/" target="_blank">
          <img src={pop} className="logo" alt="Vite logo" />
          <img src={newAgeLogo} className="logo" alt="Vite logo" />

        </a>
      </div>
      <h1>New Age Cinema</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the New Age logo to learn more
      </p>
    </>
  )
}

export default App
