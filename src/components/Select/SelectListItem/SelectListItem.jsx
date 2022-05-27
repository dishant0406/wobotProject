import React from 'react'

const SelectListItem = ({labelid, defaultValue, Allchecked, setAllChecked, setData}) => {
  const [checked, setChecked] = React.useState(false)

  React.useEffect(() => {


      Allchecked===false && setChecked(false);

  }, [Allchecked])
  
  const handleChange = (e)=>{
    Allchecked===false ? setAllChecked(true) : setAllChecked(false);
    e.target.checked ? setChecked(true) : setAllChecked(false);
    setData(e.target.value);
  }
  return (
    <li className="ks-selected">
      <input type="checkbox" checked={checked} id={labelid} defaultValue={defaultValue} onChange={handleChange}/>
      <label htmlFor={labelid}>{defaultValue}</label>
    </li>
  )
}

export default SelectListItem