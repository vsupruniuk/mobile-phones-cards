import { createSlice } from '@reduxjs/toolkit';
import phones from '../../phones.json';
import { Phone } from '../../types/Phone';

export interface PhonesState {
  phones: Phone[];
}

const initialState: PhonesState = {
  phones,
};

export const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {},
});

export default phonesSlice.reducer;
