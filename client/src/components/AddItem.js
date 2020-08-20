import React, {useEffect, useState} from 'react';
import Input from './Input';
import DropDown from './Dropdown';
import GroceryType from './GroceryType';

const AddItem = ({
  onItemNameChange, 
  onItemQuantityChange,
  onSelectType,
  onAddItem,
})=> {

const [buttonDisabled, setButtonDisabled] = useState(true);
const [isItemNameEntered, setIsItemNameEntered] = useState(false);
const [isItemQuantityEntered, setIsItemQuantityEntered] = useState(false);
  
useEffect(() =>{
  setButtonDisabled(isItemNameEntered ? false : true);
});

return (
  <div style={{ padding: "10px" }}>
    <Input
      onChange={(event) => {
        onItemNameChange(event); 
        setIsItemNameEntered(event.target.value ? true : false);
        }}
      placeholder="Item"
    />
    <Input
      onChange={onItemQuantityChange}
      placeholder="Quantity"
    />
    <DropDown
      name='type'
      options={Object.values(GroceryType)}
      selectedOption={GroceryType.Frozen}
      onSelectDropdown={onSelectType}
    />
    <button onClick={onAddItem} disabled={buttonDisabled}>
      ADD
    </button>
  </div>
);
}

export default AddItem;