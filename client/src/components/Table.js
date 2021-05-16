import React from 'react';
import DropDown from './Dropdown';
import GroceryType from './GroceryType';
import RoundButton from './RoundButton';

const Table = ({ data,
  onAdd,
  onSubtract,
  onDeleteListItem,
  onSelectType, }) => {

  const tableBody = data.map(item => (
    <tr style={{ padding: "10px" }} key={data.name}>
      <th>
        <RoundButton value='+' onClick={() => (onAdd(item.id))} /> &nbsp;
        {item.quantity} &nbsp;
        <RoundButton value='-' onClick={() => (onSubtract(item.id))} />  &nbsp;
      </th>
      <th>
        {item.name} &nbsp;
      </th>
      <th>
        <DropDown
          name='type'
          itemId={item.id}
          options={Object.values(GroceryType)}
          selectedOption={item.type}
          onSelectDropdown={console.log("onSelectDropdown")}
        />
      </th>
      <th>
        <RoundButton value='X' onClick={() => (onDeleteListItem(item.id))} />
        <button onClick={() => onDeleteListItem(item.id)}>
          Delete
        </button>
      </th>
    </tr>
  ));

  return (
    <table>
      <tr>
        <th>Quantity</th>
        <th>Item</th>
        <th>Category</th>
        <th>Actions</th>
      </tr>
      {tableBody}
    </table>);
};

export default Table;