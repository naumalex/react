import { createSlice } from '@reduxjs/toolkit';

const newFormDataSlice = createSlice({
  name: 'newFormData',
  initialState: {
    name: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'Mail',
    isTCAccepted: false,
    image: '',
    countries: ['Belarus', 'England', 'USA'],
    selectedCountry: '',
  },
  reducers: {
    newFormData(_, action) {
      return action.payload;
    },
  },
});
export const { newFormData } = newFormDataSlice.actions;
export default newFormDataSlice.reducer;
