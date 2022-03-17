import axios, { AxiosResponse } from 'axios';
import PersonalInfoResponse from './PersonalInfoResponse.model';
import { BACKEND_URL } from '../common/config';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../common/store';
import { useNotifications } from 'reapop';
import PersonalInfo from './PersonalInfo.model';


const usePersonalInfo = () => {
  const [user, userSet] = useState<PersonalInfo>();
  const dispatch = useDispatch();
  const { notify } = useNotifications();
  const language = useSelector((state: RootState) => state.language);

  useEffect(() => {
    async function loadUserInfo() {
      try {
        const info: AxiosResponse<PersonalInfoResponse> = await axios.get(BACKEND_URL + '/api/personal/');
        if (info.status == 200) {
          const userData = info.data;
          const userInfo = <PersonalInfo>{
            fullName: userData.firstName + ' ' + userData.lastName,
            addressLine: userData.address.street + ' ' + userData.address.houseNumber + ' ' + userData.address.numberExtension,
            municipalityLine: userData.address.postalCode + ' ' + userData.address.municipality,
            countryLine: 'Belgium',
            birthDate: '5 september enzo 1983 ',
            mobileNumber: userData.mobileNumber,
            driverLicense: userData.driverLicense
          };

          userSet(userInfo);
        }
        else {
          dispatch(notify({ message: `Error occured while fetching personal info ${info.status}`, status: 'error' }));
        }
      }
      catch (error) {
        dispatch(notify({ message: 'While tring to fetch remote information something went wrong', status: 'error' }));
      }
    }

    loadUserInfo();
  }, [language]);

  return { user };

};

export default usePersonalInfo;