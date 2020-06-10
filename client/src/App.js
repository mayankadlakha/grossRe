// /client/App.js
import React, { Component } from "react";
import { addNewItem, getGroceryList, updateItem, deleteItem, deleteList } from "./localStorage";
import { getNextItemId, isItemInList } from "./Selectors";

class App extends Component {
  // initialize our state 
  state = {
    data: [],
    id: 0,
    name: 'null',
    intervalIsSet: false,
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

  putDataToDB = name => {
    addNewItem({
      id: getNextItemId(this.state),
      name: name
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

  render() {
    const { data } = this.state;
    return (
      <div style={{textAlign: "center"}}>
          <button onClick={() => this.deleteAllFromDB()}>
            Clear All
          </button>
        <ul style={{padding: "10px", alignItems: "center", justifyContent: "center"}}>
          {data.length <= 0
            ? "NO DB ENTRIES YET"
            : data.map(dat => (
                <ul style={{padding: "10px"}} key={data.name}>
                  {dat.name} &nbsp;
                  {dat.id}
                  <button onClick={() => this.deleteOneFromDB(dat.id)}>
                    Delete
                  </button>
                </ul>
              ))}
        </ul>
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="add something in the database"
            style={{ width: "200px" }}
          />
          <button onClick={() => this.putDataToDB(this.state.name)}>
            ADD
          </button>
        </div>
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