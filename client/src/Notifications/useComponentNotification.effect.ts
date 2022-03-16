import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUpNotifications, useNotifications, bootstrapTheme } from 'reapop';
import { useAppDispatch, useAppSelector } from '../common/hooks';
import { RootState } from '../common/store';
import { useAppNotifications } from './useAppNotification.hooks';

const useComponentNotification = () => {
  //const { dismissNotification, dismissNotifications } = useNotifications();
  // const { notifications } = useNotifications();
  // const notifications = useAppSelector(state => state.myNotifications);
  
  // const notifications = useSelector((state: RootState) => state.notifications);
  const notifications = useAppSelector(state => state.notifications);
  const dispatch = useAppDispatch();
  const {dismissNotification, dismissNotifications} = useAppNotifications();
  

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

  useEffect(() => {
    console.log('we are now checking notifications', notifications);
  },[notifications]);

  const clearNotifications = () => dispatch(dismissNotifications());

  return { notifications, deleteNotification, clearNotifications, theme: bootstrapTheme };
};

export default useComponentNotification;
