import { configureStore } from '@reduxjs/toolkit';
import phonesReducer from '../features/phones/phonesSlice';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
