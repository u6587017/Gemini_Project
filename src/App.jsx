import { useState } from 'react'
import background from './assets/background.svg'
import './App.css'
import Login from './components/login'
import Register from './components/register'

function App() {

  return (
    <>
    <div style={{background: `url(${background})`}} className="min-h-screen flex items-center justify-center p-4">
    <Login /> 
    </div>  
    </>
  )
}

export default App
