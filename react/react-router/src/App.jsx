import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componments/Navbar'
import { createBrowserRouter , RouterProvider } from'react-router-dom'
// import About from './pages/About'
import Home from './componments/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: '/home',
      element : <Home/>
    }
  ])
  return (
    <>
      <Navbar/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
