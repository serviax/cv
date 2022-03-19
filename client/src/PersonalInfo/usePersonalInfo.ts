import axios, { AxiosResponse } from 'axios';
import PersonalInfoResponse from './PersonalInfoResponse';
import { BACKEND_URL, IS_RECAPTCHA_DISABLED, LANGUAGES, RECAPTCHA_SITE_KEY } from '../common/config';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../common/store';
import { useNotifications } from 'reapop';
import PersonalInfo from './PersonalInfo.model';


const usePersonalInfo = () => {
  const [user, userSet] = useState<PersonalInfo>();
  const [isHuman, setIsHuman] = useState<boolean>(IS_RECAPTCHA_DISABLED != null);
  const dispatch = useDispatch();
  const { notify } = useNotifications();
  const language = useSelector((state: RootState) => state.language);
  const langaugeSet = LANGUAGES.find(l => l.code == language);
  const culture = langaugeSet?.culture;

  const reCaptchaKey = RECAPTCHA_SITE_KEY;


  useEffect(() => {
    async function loadUserInfo() {
      try {
        const info: AxiosResponse<PersonalInfoResponse> = await axios.get(BACKEND_URL + '/api/personal/');
        if (info.status == 200) {
          const userData = info.data;
          const basicInfo = { fullName: userData.firstName + ' ' + userData.lastName };
          let extraInfo = {};
          if (isHuman) {
            const birthDate = new Date(Date.parse(userData.birthDate)); 

            extraInfo = {
              addressLine: userData.address.street + ' ' + userData.address.houseNumber + ' ' + userData.address.numberExtension,
              municipalityLine: userData.address.postalCode + ' ' + userData.address.municipality,
              countryLine: '',
              birthDate: birthDate.toLocaleDateString(culture),
              mobileNumber: userData.mobileNumber,
              driverLicense: userData.driverLicense,
              email: userData.email,
              emailLink: 'mailto:' + userData.email + '?subject=Online%20C.V.'
            };
          }
          const userInfo = <PersonalInfo>{ ...basicInfo, ...extraInfo };

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
  }, [language, isHuman]);

  return { user, isHuman, setIsHuman, reCaptchaKey, language };

};

export default usePersonalInfo;