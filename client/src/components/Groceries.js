
import React from 'react';
import AddItem from './AddItem';
import Header from './Header';
import List from './List';

const Groceries = ({
  data,
  onAdd,
  onSubtract,
  deleteOneFromDB,
  onSelectType,
  onAddItem,
  onInputChange }) => (
    <div style={{ textAlign: "center" }}>
      <Header />
      <button onClick={() => this.deleteAllFromDB()}>
        Clear All
          </button>
      <List
        data={data}
        onAdd={onAdd}
        onSubtract={onSubtract}
        onDeleteListItem={deleteOneFromDB}
        onSelectType={onSelectType}
      />
      <AddItem
        onItemNameChange={e => onInputChange({ name: e.target.value })}
        onItemQuantityChange={e => onInputChange({ quantity: e.target.value })}
        onSelectType={({ e }) => onInputChange({ type: e.target.value })}
        onAddItem={() => onAddItem()}
      />
      {/*<div style={{ padding: "10px" }}>
        <input
          type="text"
          style={{ width: "200px" }}
          onChange={e => onInputChange({ idToUpdate: e.target.value })}
          placeholder="id of item to update here"
        />
        <input
          type="text"
          style={{ width: "200px" }}
          onChange={e => onInputChange({ updateToApply: e.target.value })}
          placeholder="put new value of the item here"
        />
        <button
          onClick={() =>
            this.updateDB(this.state.idToUpdate, { name: this.state.updateToApply })
          }
        >
          UPDATE
            </button>
      </div> */}
    </div>
  )

export default Groceries;