import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import { Notification, STATUSES } from 'reapop';
import { CONFIG } from 'reapop/dist/constants';
// import 'reapop/dist/services/notifications';
// import { prepareNotification } from 'reapop/dist/services/notifications';


const initialState : Notification[] = [];
const notificationsSlice = createSlice({
  name: 'myNotifications',
  initialState,
  reducers: {
    addNotification(state, action) {
      const newNotification = { id: 'someRandomId', dismissible: true, status: STATUSES.none, buttons:[], ... action.payload};
      const notifications = [...state, newNotification];
      return notifications;
    },

    dismissNotification(state, action) {
      const updatedState = state.filter(x => x.id !== action.payload);
      return updatedState;
    },

    clearNotifications() {
      return <Notification[]>[];
    }

  }
});

export const { addNotification, dismissNotification, clearNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
