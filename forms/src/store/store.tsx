import { configureStore } from '@reduxjs/toolkit';
import savedFormsDataSlice from './savedFormsDataSlice';
import newFormDataSlice from './newFormDataSlice';

const store = configureStore({
  reducer: {
    savedFormsData: savedFormsDataSlice,
    newFormData: newFormDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
