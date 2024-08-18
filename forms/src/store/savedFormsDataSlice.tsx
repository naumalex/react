import { createSlice } from '@reduxjs/toolkit';

export interface FormData {
  name: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  isTCAccepted: boolean;
  image: string;
  countries: Array<string>;
  selectedCountry: string;
}

const savedFormsDataSlice = createSlice({
  name: 'savedFormsData',
  initialState: new Array<FormData>(),
  reducers: {
    saveFormData(state, action) {
      state.push(action.payload);
      return state;
    },
  },
});
export const { saveFormData } = savedFormsDataSlice.actions;
export default savedFormsDataSlice.reducer;
