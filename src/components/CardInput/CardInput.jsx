import React from 'react'
import './CardInput.css'

const CardInput = ({title, labelid, placeholdertext, formData, setFormData}) => {
  return (
    <div className="cardInput">
      <div className="inputcontainer">
      <label htmlFor={labelid}>{title}</label><br/>
      <input value={formData.company} type="text" id={labelid} onChange={e=> setFormData({...formData, company:e.target.value} )} placeholder={placeholdertext}/>
      </div>
    </div>
  )
}

export default CardInput