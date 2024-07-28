import { createSlice } from '@reduxjs/toolkit';
import { Animal } from '../services/api.types';

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState: new Array<Animal>(),
  reducers: {
    addSelectedItem(state, action) {
      state.push(action.payload);
      return state;
    },
    removeSelectItem(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      return state;
    },
    removeAllSelectedItems() {
      return [];
    },
  },
});
export const { addSelectedItem, removeSelectItem, removeAllSelectedItems } =
  selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
