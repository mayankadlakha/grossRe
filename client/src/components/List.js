import React from 'react';
import RoundButton from './RoundButton';
import DropDown from './Dropdown';
import GroceryType from './GroceryType';
import Table from './Table';

const List = ({
  data,
  onAdd,
  onSubtract,
  onDeleteListItem,
  onSelectType,
}
) => (
  <div style={{ padding: "10px", alignItems: "center", justifyContent: "center" }}>
    {data.length <= 0
      ? "NO DB ENTRIES YET"
      :
      <Table data={data} onAdd={onAdd} onSubtract={onSubtract} onDeleteListItem={onDeleteListItem} />
    }
  </div>
);

export default List;

