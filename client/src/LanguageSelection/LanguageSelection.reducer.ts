import { createSlice } from '@reduxjs/toolkit';


const initialState = 'nl';
const languageSlice = createSlice({
  name: 'langauge',
  initialState,
  reducers: {
    switchLanguage(state, action) {
      const newLanguage = action.payload;
      return newLanguage;
    }
  }
});

export const { switchLanguage } = languageSlice.actions;
export default languageSlice.reducer;