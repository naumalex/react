import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    uid: 'ANMA0000264633',
    name: 'Abalone',
    earthAnimal: true,
    earthInsect: false,
    avian: false,
    canine: false,
    feline: false,
  },
  reducers: {
    setCard(_, action) {
      return action.payload;
    },
  },
});
export const { setCard } = cardSlice.actions;
export default cardSlice.reducer;
