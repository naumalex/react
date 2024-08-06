import { configureStore } from '@reduxjs/toolkit';
import { animalApi } from '../services/animalApi';
import cardSlice from './cardSlice';
import currentPageCardsSlice from './currentPageCardsSlice';
import selectedItemsSlice from './selectedItemsSlice';

export const store = configureStore({
  reducer: {
    card: cardSlice,
    [animalApi.reducerPath]: animalApi.reducer,
    currentPageCards: currentPageCardsSlice,
    selectedItems: selectedItemsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animalApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
