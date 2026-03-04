import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calendar from './components/Calendar'
import './App.css';

const App = () => {

  return (
    <div className="App">
<h1>My Trip Schedule </h1>
<h2>Trip information organiezd finally. </h2>

<Calendar/>

      
    </div>
  )
}

export default App
