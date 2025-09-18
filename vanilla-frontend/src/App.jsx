import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Searchbar from './components/Searchbar'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Searchbar/>
      <Outlet/>
      <Navbar/>
      
    </>
  )
}

export default App
