import React from 'react'
import './styles.css'
import SelectListItem from './SelectListItem/SelectListItem';

const SelectList = ({formData, setFormData}) => {
  const [data, setData] = React.useState('')
  const [Allchecked, setAllChecked] = React.useState(false)

  React.useEffect(() => {
    setFormData({...formData, size:data})
  }, [data])
  
  return (
    <div className="selectcontainer">
      <label>Company Size</label>
  <ul className="ks-cboxtags">
    <SelectListItem labelid='checkboxEleven' setData={setData} Allchecked={Allchecked} setAllChecked={setAllChecked} defaultValue='1-20'/>
    <SelectListItem labelid='checkboxTwelve' setData={setData} Allchecked={Allchecked} setAllChecked={setAllChecked} defaultValue='21-50'/>
    <SelectListItem labelid='checkboxThirteen' setData={setData} Allchecked={Allchecked} setAllChecked={setAllChecked} defaultValue='51-200'/>
    <SelectListItem labelid='checkboxFourteen' setData={setData} Allchecked={Allchecked} setAllChecked={setAllChecked} defaultValue='201-500'/>
    <SelectListItem labelid='checkboxFifteen' setData={setData} Allchecked={Allchecked} setAllChecked={setAllChecked} defaultValue='500+'/>
  </ul>
</div>
  )
}

export default SelectList