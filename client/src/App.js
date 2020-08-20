// /client/App.js
import React, { Component } from "react";
import { addNewItem, getGroceryList, updateItem, deleteItem, deleteList } from "./localStorage";
import { isItemInList, getItemById, getNewItem } from "./Selectors";
import List from "./components/List";
import AddItem from "./components/AddItem";

class App extends Component {
  // initialize our state 
  state = {
    data: [],
    id: 0,
    name: 'null',
    quantity: 0,
    idToDelete: null,
    objectToUpdate: null
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has 
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
  }

  getDataFromDb = () => {
    const groceryList = getGroceryList();
    this.setState({data: groceryList});
  };

  putDataToDB = () => {
    console.log(getNewItem(this.state))
    addNewItem({
      ...getNewItem(this.state)
      });
    this.getDataFromDb();
  };


  deleteOneFromDB = idTodelete => {
    deleteItem(idTodelete);
    this.getDataFromDb();
  };

  deleteAllFromDB = () => {
    deleteList();
    this.getDataFromDb();
  }

  updateDB = (idToUpdate, updateToApply) => {
    if (isItemInList(this.state, idToUpdate)){ 
      updateItem(idToUpdate, updateToApply);
      this.getDataFromDb();
    };
  };

  addToItem = ( itemId )=>{
    const itemInState = getItemById(this.state, itemId);
    const newItem = {
      ...itemInState,
      quantity: parseInt(itemInState.quantity) + 1,
    }
    
    this.updateDB(itemId, newItem);
  }

   subtractFromItem = ( itemId )=>{
    const itemInState = getItemById(this.state, itemId);
    const newItem = {
      ...itemInState,
      quantity: parseInt(itemInState.quantity) - 1,
    }
    
    this.updateDB(itemId, newItem);
  }

  onSelectType = ({e, itemId}) => {
    console.log(e.target.value, itemId)
    const updateToApply = {
      type: e.target.value,
    };
    this.updateDB(itemId, updateToApply);
  }

  render() {
    const { data } = this.state;
    return (
      <div style={{textAlign: "center"}}>
        <button onClick={() => this.deleteAllFromDB()}>
          Clear All
        </button>
        <List
          data={data}
          onAdd={this.addToItem}
          onSubtract={this.subtractFromItem}
          onDeleteListItem={this.deleteOneFromDB}
          onSelectType={this.onSelectType}
        />
        <AddItem 
          onItemNameChange = {e => this.setState({ name: e.target.value })} 
          onItemQuantityChange = {e => this.setState({ quantity: e.target.value })} 
          onSelectType={({e}) => this.setState({ type: e.target.value })}
          onAddItem={() => this.putDataToDB()}
        />
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            style={{ width: "200px" }}
            onChange={e => this.setState({ idToUpdate: e.target.value })}
            placeholder="id of item to update here"
          />
          <input
            type="text"
            style={{ width: "200px" }}
            onChange={e => this.setState({ updateToApply: e.target.value })}
            placeholder="put new value of the item here"
          />
          <button
            onClick={() =>
              this.updateDB(this.state.idToUpdate, {name: this.state.updateToApply})
            }
          >
            UPDATE
          </button>
        </div>
      </div>
    );
  }
}

export default App;