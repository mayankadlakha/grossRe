export const getNextItemId = (state) => state.data.length;

export const isItemInList = (state, itemId) => state.data.filter(({id}) => id === itemId ) !== null;

export const getItemById = (state, itemId) => state.data.find(({id})=> id === itemId);

export const getNewItem = (state) => ({
  id: getNextItemId(state),
  name: state.name,
  quantity: parseInt(state.quantity),
  type: state.type,
});