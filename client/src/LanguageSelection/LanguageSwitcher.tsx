import React from 'react';
import { useAppDispatch, useAppSelector } from '../common/hooks';
// import { addNotification } from '../Notifications/Notifications.reducer';
import { switchLanguage } from './LanguageSelection.reducer';
import { useAppNotifications } from '../Notifications/useAppNotification.hooks';


const LanguageSwitcher = () => {
  const language = useAppSelector(state => state.language);
  const dispatch = useAppDispatch();
  // const { notify } = useNotifications();
  const { notify, dismissNotifications } = useAppNotifications();

  const setLanguage = (lang: string) => {
    dispatch(switchLanguage(lang));

    const notification =notify({message:' verwisseld naar ' + lang, status: 'info'});
    const notification2 =notify({message:' switched to ' + lang, status: 'info'});
    console.log(notification);
    dispatch(notification);
    dispatch(notification2);
  };

  return (<div>
    current lanuage : {language}
    <button onClick={() => setLanguage('nl')}>To Dutch</button>
    <button onClick={() => setLanguage('en')}>To English</button>
  </div>);
};

export default LanguageSwitcher;