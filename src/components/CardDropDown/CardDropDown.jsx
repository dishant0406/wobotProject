import React, { Component } from 'react'
import './styles.css'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const CardDropDown = ({labeltext, formData, setFormData}) => (
  <div className='dropdowncontainer'>

    <label>{labeltext}</label>
    <Select className='dropdown' options={options} onChange={e=> setFormData({...formData, industry: e.value})}/>
  </div>
)

export default CardDropDown;