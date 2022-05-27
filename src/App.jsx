import React from 'react'
import './App.css'
import logo from './assets/logo.png'
import Card from './components/Card/Card'
const App = () => {
  return (
    <div className='App'>
      <div className="logocontainer">
        <img src={logo}/>
      </div>
      <div className="cardcontainer">
        <Card/>
      </div>
      <div className="cardfooter">
      Terms of use  |  Privacy policy 
      </div>
    </div>
  )
}

export default App
