import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Widget from './components/Widget'
import Categories from './pages/Categories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Categories/>
    </>
  )
}

export default App
