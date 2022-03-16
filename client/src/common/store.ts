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

// const rootReducer = combineReducers({
//   language : LanguageSelectionReducer,
//   notifications: notificationsReducer()
// });

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const store = createStore(rootReducer,   (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());


console.log('store state', store.getState());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
