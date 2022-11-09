import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a>
          <img src="Imagenes/Logo2.png" className="logo" alt="NP logo" />
        </a>
        
      </div>
      <h1>Welcome!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Counter {count}
        </button>
        <p>
          This is my first react proyect 
        </p>
      </div>
      <p className="read-the-docs">
        Portfolio coming soon!
      </p>
    </div>
  )
}

export default App
