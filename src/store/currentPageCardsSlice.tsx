import { createSlice } from '@reduxjs/toolkit';
//import { AnimalsPagedQueryResponse } from '../services/api.types';
import { INITIAL_PAGE_RESPONSE } from '../utils/constants';
//const initialState: AnimalsPagedQueryResponse = {page: INITIAL_PAGE_RESPONSE, animals: []};

const currentPageCardsSlice = createSlice({
  name: 'currentPageCards',
  initialState: { page: INITIAL_PAGE_RESPONSE, animals: [] },
  reducers: {
    setCurrentPageCards(_, action) {
      return action.payload;
    },
  },
});
export const { setCurrentPageCards } = currentPageCardsSlice.actions;
export default currentPageCardsSlice.reducer;
