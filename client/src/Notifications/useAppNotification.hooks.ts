import { Notification, useNotifications } from 'reapop';

// The actual implementation in reapop for reducers is incorrect, the payload is sent instead of the action
// this means it doesn't work properly
// this hook fixes the wrong implemtation
const useAppNotifications = (() => {
  const { notify, notifications } = useNotifications();


  const wrappedNotify = (notification: Partial<Notification>) => {
    const payloadData = notify(notification);
    return { type: 'reapop/upsertNotification', payload: payloadData };
  };

  const wrappedDismissNotification = (id: string) => {
    const payloadData = id;
    return { type: 'reapop/dismissNotification', payload: payloadData };
  };

  const wrappedDimissNotifications = () => {
    return { type: 'reapop/dismissNotifications' };
  };

  return { notify: wrappedNotify, dismissNotification: wrappedDismissNotification, dismissNotifications: wrappedDimissNotifications, notifications };
});


export { useAppNotifications };