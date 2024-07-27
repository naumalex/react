import { createSlice } from '@reduxjs/toolkit';

const searchQuerySlice = createSlice({
  name: 'searchQuery',
  initialState: { searchQuery: localStorage.getItem('searchValue') || '' },
  reducers: {
    setSearchQuery(state, action) {
      console.log(state);
      console.log(action);
    },
  },
});
export const { setSearchQuery } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
