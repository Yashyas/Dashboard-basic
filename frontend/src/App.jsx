import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
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
