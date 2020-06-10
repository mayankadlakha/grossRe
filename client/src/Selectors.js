export const getNextItemId = (state) => state.data.length;

export const isItemInList = (state, itemId) => state.data.filter(({id}) => id === itemId ) !== null;
