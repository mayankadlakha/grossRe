import React from 'react';

const DropDown = ({
  name,
  itemId,
  options,
  selectedOption,
  onSelectDropdown,
}) => {

  const isItemSelected = (item) => item === selectedOption ? "selected" : "";

return (
  <select name={name} id={itemId} onChange={(e) => onSelectDropdown({e, itemId})}>
     {options.map(item => <option selected={isItemSelected(item)} value={item}>{item}</option>)}
    </select>
   
  );}

export default DropDown