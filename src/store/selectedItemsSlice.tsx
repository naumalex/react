import { createSlice } from '@reduxjs/toolkit';

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState: new Array<string>(),
  reducers: {
    addSelectedItem(state, action) {
      console.log('Add');
      state.push(action.payload);
      console.log(state.toString());
      return state;
    },
    removeSelectItem(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      console.log('Remove');
      console.log(state.toString());
      return state;
    },
  },
});
export const { addSelectedItem, removeSelectItem } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
