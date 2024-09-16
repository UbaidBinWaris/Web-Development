import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componments/Navbar'
import { createBrowserRouter , RouterProvider } from'react-router-dom'
import About from './componments/About'
import Home from './componments/Home'
import Contact from './componments/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element : <><Navbar/></>
    },
    {
      path: '/Home',
      element : <><Navbar/> <Home/></>
    },
    {
      path: '/About',
      element : <><Navbar/> <About/></>
    },
    {
      path: '/Contact',
      element : <><Navbar/> <Contact/></>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
