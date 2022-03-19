// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import notificationsReducer from 'reapop/dist/reducers/notifications/reducer';
import LanguageSelectionReducer from '../LanguageSelection/LanguageSelection.reducer';
// import NotificationsReducer from '../Notifications/Notifications.reducer';
import { reducer as notificationsReducer } from 'reapop';

const store = configureStore({
  reducer: {
    'language': LanguageSelectionReducer,
    'notifications' : notificationsReducer(),
  }
});


console.log('store state', store.getState());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
