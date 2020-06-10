const setGroceryList = newGroceryList => localStorage.setItem('groceryList', JSON.stringify(newGroceryList ));

export const getGroceryList = () => JSON.parse(localStorage.getItem('groceryList')) || [];

export const addNewItem = (newItem) => {
  const currentGroceryList = getGroceryList();
  const newGroceryList = [...currentGroceryList || [], newItem];
  setGroceryList(newGroceryList);
}

export const updateItem = (itemIdToUpdate, updateToApply) => {
  const currentGroceryList = getGroceryList();
  console.log(itemIdToUpdate, updateToApply)
  const newGroceryList = currentGroceryList.map(
    item => item.id === parseInt(itemIdToUpdate) ? {...item, ...updateToApply} : item
    );
  setGroceryList(newGroceryList);
}

export const deleteItem = (itemIdToDelete) => {
  const currentGroceryList = getGroceryList();
  const newGroceryList = currentGroceryList.filter(item => item.id !== itemIdToDelete);
  setGroceryList(newGroceryList);
}

export const deleteList = () => localStorage.clear();