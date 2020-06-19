import React from 'react';
import RoundButton from './RoundButton';

const List = ({
  data,
  onAdd,
  onSubtract,
  onDeleteListItem,
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
          <button onClick={() => onDeleteListItem(item.id)}>
            Delete
          </button>
        </ul>
      ))}
</ul>

);

export default List;

