import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../common/config';
import axios, { AxiosResponse } from 'axios';
import { useTranslation } from '../translations';
import { useAppDispatch, useAppSelector } from '../common/hooks';
import { useAppNotifications } from '../Notifications/useAppNotification.hooks';
import LanguageKnowledgeResponse from './LanguageKnowledgeResponse';

const useLanguageKnowledges = () => {
  const language = useAppSelector(state => state.language);
  const dispatch = useAppDispatch();
  const { notify } = useAppNotifications();
  const [languageKnowledges, setLanguageKnowledges] = useState<LanguageKnowledgeResponse[]>();
  const { t } = useTranslation();

  useEffect(() => {
    async function loadLanguages() {
      try {
        const result: AxiosResponse<LanguageKnowledgeResponse[]> = await axios.get(`${BACKEND_URL}/api/language-knowledges/${language}`);
        const sortedLanguages = result.data.sort((a,b) => b.level - a.level);
        setLanguageKnowledges(sortedLanguages);
      }
      catch {
        dispatch(notify({ message: t('errors.failedFetch', { topic: 'Languages' }), status: 'error' }));
      }
    }

    loadLanguages();
  }, [language]);

  return { languages: languageKnowledges };
};

export default useLanguageKnowledges;