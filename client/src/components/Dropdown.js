import React from 'react';

const DropDown = ({
  name,
  itemId,
  options,
  selectedOption,
  onSelectDropdown,
}) => {
  const isItemSelected = (item) => item === selectedOption ? "selected" : "";
  const randomFunc = ({ e, itemId }) => console.log("Yo I am random", itemId) || onSelectDropdown({ e, itemId });

  return (
    <select name={name} id={itemId} onChange={(e) => randomFunc({ e, itemId })}>
      { options.map(item => <option selected={isItemSelected(item)} value={item}>{item}</option>)}
    </select >

  );
}

export default DropDown