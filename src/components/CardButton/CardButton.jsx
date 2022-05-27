import React from 'react'
import './styles.css'

const CardButton = ({formData}) => {
  const handleClick = (e)=>{
    e.preventDefault();
    console.log(formData)
  }

  return (
    <div className="buttoncontainer">
      <button onClick={handleClick}>Get Started</button>
    </div>
  )
}

export default CardButton