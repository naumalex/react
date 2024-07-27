import { configureStore } from '@reduxjs/toolkit';
import searchQuerySlice from './searchQuerySlice';
import { animalApi } from '../services/animalApi';

export const store = configureStore({
  reducer: {
    searchQuery: searchQuerySlice,
    [animalApi.reducerPath]: animalApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animalApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
