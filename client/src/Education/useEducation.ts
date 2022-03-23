import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import { BACKEND_URL } from '../common/config';
import { useTranslation } from '../common/translations';
import { useAppDispatch } from '../common/hooks';
import { useAppNotifications } from '../Notifications/UseAppNotification.hooks';
import EducationResponse from './EducationResponse';

const useEducation = () => {
  const dispatch = useAppDispatch();
  const { notify } = useAppNotifications();
  const [education, setEducation] = useState<EducationResponse>();
  const { t } = useTranslation();

  useEffect(() => {
    async function loadEducation() {
      try {
        const result: AxiosResponse<EducationResponse> = await axios.get(`${BACKEND_URL}/api/education`);
        setEducation(result.data);
      }
      catch {
        dispatch(notify({ message: t('errors.failedFetch', { topic: 'Languages' }), status: 'error' }));
      }
    }

    loadEducation();
  }, []);

  return { education };
};

export default useEducation;