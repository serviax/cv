import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import { BACKEND_URL } from '../common/config';

import { useTranslation } from '../common/translations';
import { useAppDispatch } from '../common/hooks';
import { useAppNotifications } from '../Notifications/useAppNotification.hooks';
import DevelopmentKnowledgeResponse from './DevelopmentKnowledgeResponse';

const useKnowledges = () => {
  const dispatch = useAppDispatch();
  const { notify } = useAppNotifications();
  const [knowledges, setKnowledges] = useState<DevelopmentKnowledgeResponse[]>();
  const { t } = useTranslation();

  const calculateImportance = (knowledge: DevelopmentKnowledgeResponse): number => {
    let value = 0;
    if (knowledge.usedInLastYear)
      value += 4;
    if (knowledge.usedInProject)
      value += 3;
    if (knowledge.usedInPersonalProject)
      value += 2;
    if (knowledge.followedTraining)
      value += 1;

    return value;
  };

  useEffect(() => {
    async function loadKnowledges() {
      try {
        const result: AxiosResponse<DevelopmentKnowledgeResponse[]> = await axios.get(`${BACKEND_URL}/api/development-knowledges/`);
        const sortedKnowledges = [...result.data].sort((a, b) => {
          const levelDiff = b.level - a.level;
          if (levelDiff != 0)
            return levelDiff;

          const aImportance = calculateImportance(a);
          const bImportance = calculateImportance(b);

          return bImportance - aImportance;
        }
        );
        setKnowledges(sortedKnowledges);
      }
      catch {
        dispatch(notify({ message: t('errors.failedFetch', { topic: 'Knowledges' }), status: 'error' }));
      }
    }

    loadKnowledges();
  }, []);

  return { knowledges };
};

export default useKnowledges;