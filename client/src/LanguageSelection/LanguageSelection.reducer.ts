import { createSlice } from '@reduxjs/toolkit';


const initialState = localStorage.getItem('language') ?? 'nl';


const languageSlice = createSlice({
  name: 'langauge',
  initialState,
  reducers: {
    switchLanguage(state, action) {
      const newLanguage = action.payload;
      localStorage.setItem('language', action.payload);
      return newLanguage;
    }
  }
});

export const { switchLanguage } = languageSlice.actions;
export default languageSlice.reducer;