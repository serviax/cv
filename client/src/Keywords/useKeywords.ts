import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import { BACKEND_URL } from '../common/config';
import KeyWordResponse from './KeywordResponse.model';
import { useTranslation } from '../common/translations';
import { useAppDispatch, useAppSelector } from '../common/hooks';
import { useAppNotifications } from '../Notifications/UseAppNotification.hooks';

const useKeyWords = () => {
  const language = useAppSelector(state => state.language);
  const dispatch = useAppDispatch();
  const { notify } = useAppNotifications();
  const [keyWords, setKeywords] = useState<KeyWordResponse[]>();
  const { t } = useTranslation();

  useEffect(() => {
    async function loadKeywords() {
      try {
        const result: AxiosResponse<KeyWordResponse[]> = await axios.get(`${BACKEND_URL}/api/keywords/${language}`);
        setKeywords(result.data);
      }
      catch {
        dispatch(notify({ message: t('errors.failedFetch', { topic: 'keywords' }), status: 'error' }));
      }
    }

    loadKeywords();
  }, [language]);

  return { keyWords };
};

export default useKeyWords;