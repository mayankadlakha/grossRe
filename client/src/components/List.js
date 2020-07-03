import React from 'react';
import RoundButton from './RoundButton';
import DropDown from './Dropdown';
import GroceryType from './GroceryType';

const List = ({
  data,
  onAdd,
  onSubtract,
  onDeleteListItem,
  onSelectType,
}
) => (
<ul style={{padding: "10px", alignItems: "center", justifyContent: "center"}}>
  {data.length <= 0
    ? "NO DB ENTRIES YET"
    : data.map(item => (
        <ul style={{padding: "10px"}} key={data.name}>
          <RoundButton value='+' onClick={() => (onAdd(item.id))}/> &nbsp;
          {item.quantity} &nbsp;
          <RoundButton value='-' onClick={() => (onSubtract(item.id))}/>  &nbsp;
          {item.name} &nbsp;
          <DropDown 
            name='type'
            itemId={item.id}
            options={[GroceryType.Junk, GroceryType.Vegetables, GroceryType.Frozen]}
            selectedOption={item.type}
            onSelectDropdown={onSelectType}
          />
          <button onClick={() => onDeleteListItem(item.id)}>
            Delete
          </button>
        </ul>
      ))}
</ul>

);

export default List;

