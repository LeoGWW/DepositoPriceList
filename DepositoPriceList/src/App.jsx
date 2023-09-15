import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>
      <iframe width="300px" height="690px" src="https://www.dolarsi.com/func/moduloArriba-n.html" frameborder="0" scrolling="0" allowfullscreen=""></iframe>
      </div>
      <h1>PriceList Depósito</h1>
      <h3>Developed by Leonardo Gómez Waipan</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
