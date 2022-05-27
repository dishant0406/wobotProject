import React from 'react'
import logo from '../../assets/Solid_lines.png'
import CardDropDown from '../CardDropDown/CardDropDown'
import CardInput from '../CardInput/CardInput'
import SelectList from '../Select/SelectList'
import CardButton from '../CardButton/CardButton'
import './Card.css'

const Card = () => {
  const [formData, setFormData] = React.useState({
    company: '',
    industry:'',
    size:''
  })

  return (
    <div className="card">
      <div className="cardlogo">
        <img src={logo}/>
      </div>
      <div className="cardheadtext">
        It’s a delight to have you onboard 
      </div>
      <div className="cardsubhead">
        Help us know you better.
        (This is how we optimize Wobot as per your business needs)
      </div>
      <CardInput formData={formData} setFormData={setFormData} title='Company Name' labelid='company' placeholdertext='e.g. Example Inc'/>
      <CardDropDown formData={formData} setFormData={setFormData} labeltext='Industry'/>
      <SelectList formData={formData} setFormData={setFormData}/>
      <CardButton formData={formData}/>
    </div>
  )
}

export default Card