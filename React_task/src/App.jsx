import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from './page/Signup'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Signup/>
    </>
  )
}

export default App
