import React from 'react';
import NotificationsSystem from 'reapop';
import useComponentNotification from './useComponentNotification.effect';

const Notification = () => {
  const {notifications, deleteNotification, theme} = useComponentNotification();
  
  return (<>
    <NotificationsSystem
      notifications={notifications}
      dismissNotification={(id) => deleteNotification(id)}
      theme={theme}
    />
  </>);

};

export default Notification;