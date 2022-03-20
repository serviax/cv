import { createSlice } from '@reduxjs/toolkit';
import { Notification, STATUSES } from 'reapop';


const initialState : Notification[] = [];
const notificationsSlice = createSlice({
  name: 'myNotifications',
  initialState,
  reducers: {
    addNotification(state, action) {
      const randomId = 'id-' + Math.floor(Math.random() * 99999);
      const newNotification = { id: randomId, dismissible: true, status: STATUSES.none, buttons:[], ... action.payload};
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
