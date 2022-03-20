import { configureStore } from '@reduxjs/toolkit';
import LanguageSelectionReducer from '../LanguageSelection/LanguageSelection.reducer';
import { reducer as notificationsReducer } from 'reapop';

const store = configureStore({
  reducer: {
    'language': LanguageSelectionReducer,
    'notifications' : notificationsReducer(),
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
