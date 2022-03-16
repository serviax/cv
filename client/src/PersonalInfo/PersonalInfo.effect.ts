import axios, { AxiosResponse } from 'axios';
import PersonalInfoModel from './PersonalInfo.model';
import { BACKEND_URL } from '../common/config';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../common/store';
import { useNotifications } from 'reapop';
// import { useAppDispatch } from '../common/hooks';
// import { addNotification } from '../Notifications/Notifications.reducer';
// import { notify as notifyAction} from 'reapop/dist/reducers/notifications/actions';
// import { ups } from 'reapop/dist/reducers/notifications/actions';

const usePersonalInfo = () => {
  const [user, userSet] = useState<PersonalInfoModel>();
  const dispatch = useDispatch();
  const { notify } = useNotifications();
  const language = useSelector((state: RootState) => state.language);

  useEffect(() => {
    async function loadUserInfo() {

      try {
        const info: AxiosResponse<PersonalInfoModel> = await axios.get(BACKEND_URL + '/api/personal/');
        // dispatch(addNotification('data loaded'));
        if (info.status == 200)
          userSet(info.data);
        else
          dispatch(notify({ message: `Error occured while fetching personal info ${info.status}`, status: 'error'}));
      }
      catch (error) {
        dispatch(notify({ message: 'While tring to fetch remote information something went wrong', status: 'error'}));
      }
    }

    console.log('language for persons is now set to ', language);
    loadUserInfo();
    // dispatch(notify({message:`data is met success geladen voor de taal ${language}`, status: 'info'}));
    // dispatch(notify({message:' hi there', status: 'info'}));
    // dispatch(addNotification('hello world'));
  }, [language]);

  return { user };

};

export default usePersonalInfo;