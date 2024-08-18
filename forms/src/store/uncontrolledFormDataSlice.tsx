import { createSlice } from "@reduxjs/toolkit";

const uncontrolledFormDataSlice = createSlice({
  name: "uncontrolledFormData",
  initialState: {
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "Mail",
    isTCAccepted: false,
    image: "",
    countries: ["Belarus", "England", "USA"],
    selectedCountry: "",
  },
  reducers: {
    saveUncontrolledFormData(_, action) {
      return action.payload;
    },
  },
});
export const { saveUncontrolledFormData } = uncontrolledFormDataSlice.actions;
export default uncontrolledFormDataSlice.reducer;
