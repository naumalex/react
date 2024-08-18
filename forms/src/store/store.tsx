import { configureStore } from "@reduxjs/toolkit";
import uncontrolledFormDataSlice from "./uncontrolledFormDataSlice";

const store = configureStore({
  reducer: { uncontrolledFormData: uncontrolledFormDataSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
