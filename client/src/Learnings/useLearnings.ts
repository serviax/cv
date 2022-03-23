import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import { BACKEND_URL } from '../common/config';
import { useTranslation } from '../common/translations';
import { useAppDispatch, useAppSelector } from '../common/hooks';
import { useAppNotifications } from '../Notifications/UseAppNotification.hooks';
import UpdateKnowledgeResponse from './UpdateKnowledgeSchema';
import LearningModelOverview from './Learn.model';

const useLearnings = () => {
  const language = useAppSelector(state => state.language);
  const dispatch = useAppDispatch();
  const { notify } = useAppNotifications();
  const [learnings, setLearnings] = useState<LearningModelOverview[]>();
  const { t } = useTranslation();

  useEffect(() => {
    async function loadUpdateKnowledges() {
      try {
        const result: AxiosResponse<UpdateKnowledgeResponse[]> = await axios.get(`${BACKEND_URL}/api/update-knowledges/${language}`);
        const sortedUpdateKnowledges = [...result.data].sort((a, b) => b.year - a.year);

        const learningsOverview = sortedUpdateKnowledges.reduce<LearningModelOverview[]>((overview, item) => {
          const matchedYear = overview.find(x => x.year === item.year);

          const isNewYearInOverview = matchedYear == undefined;
          const yearOverview = matchedYear == undefined ? { year: item.year, updates: [] } : matchedYear;
          const updates = [...yearOverview.updates, { description: item.description, type: item.type }];
          yearOverview.updates = updates;

          const updatedOverview = isNewYearInOverview ? [...overview, yearOverview] : overview.map(x => x.year != item.year ? x : yearOverview);

          return updatedOverview;
        }, []);
        setLearnings(learningsOverview);
      }
      catch {
        dispatch(notify({ message: t('errors.failedFetch', { topic: 'learnings' }), status: 'error' }));
      }
    }

    loadUpdateKnowledges();
  }, [language]);

  return { learnings };
};

export default useLearnings;