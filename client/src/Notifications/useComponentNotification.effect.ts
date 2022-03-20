import { useEffect } from 'react';
import { setUpNotifications, bootstrapTheme } from 'reapop';
import { useAppDispatch, useAppSelector } from '../common/hooks';
import { useAppNotifications } from './useAppNotification.hooks';

const useComponentNotification = () => {
  const notifications = useAppSelector(state => state.notifications);
  const dispatch = useAppDispatch();
  const { dismissNotification, dismissNotifications } = useAppNotifications();


  useEffect(() => {
    setUpNotifications({
      defaultProps: {
        position: 'bottom-right',
        dismissible: true
      }
    });

  }, []);

  const deleteNotification = (id: string) => {
    dispatch(dismissNotification(id));
  };

  const clearNotifications = () => dispatch(dismissNotifications());

  return { notifications, deleteNotification, clearNotifications, theme: bootstrapTheme };
};

export default useComponentNotification;
