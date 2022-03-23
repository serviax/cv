import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import { BACKEND_URL } from '../common/config';
import { useAppDispatch, useAppSelector } from '../common/hooks';
import { useAppNotifications } from '../Notifications/UseAppNotification.hooks';
import { useTranslation } from '../common/translations';
import ExperienceModel from './Experience.model';
import ProjectModel from './Project.model';
import { ProjectResponse } from './ProjectResponse';
import WorkExperienceResponse from './WorkExperienceResponse';

const useExperiences = () => {
  const language = useAppSelector(state => state.language);
  const dispatch = useAppDispatch();
  const { notify } = useAppNotifications();
  const [experiences, setExperiences] = useState<ExperienceModel[]>();
  const { t } = useTranslation();

  const getFormattedYear = (element: string | undefined): string | null => {
    let formattedResult = null;
    if (element) {
      const result = new Date(Date.parse(element));
      formattedResult = result.getFullYear().toString();
    }
    return formattedResult;
  };

  const mapToProject = (input: ProjectResponse): ProjectModel => {
    return <ProjectModel>{
      title: input.title,
      description: input.description,
      keywords: input.keywords,
      role: input.role,
      order: input.order,
      tasks: input.tasks,
      startDate: getFormattedYear(input.startDate),
      endDate: getFormattedYear(input.endDate)
    };
  };

  const mapToExperienceModel = (input: WorkExperienceResponse): ExperienceModel => {
    const sortedProjects = [...input.projects];
    sortedProjects.sort((a, b) => b.order - a.order);

    let isTooLongAgo = input.endDate != null;
    if (input.endDate)
      isTooLongAgo = (new Date().getFullYear()) - Number(getFormattedYear(input.endDate)) > 10;

    const projects = sortedProjects.map(p => mapToProject(p));
    return <ExperienceModel>{
      startDate: getFormattedYear(input.startDate),
      endDate: getFormattedYear(input.endDate),
      companyName: input.companyName,
      description: input.description,
      projects: [...projects].sort((b, a) => b.order - a.order),
      isLongAgo: isTooLongAgo
    };
  };

  useEffect(() => {
    async function loadWorkExperiences() {
      try {
        const result: AxiosResponse<WorkExperienceResponse[]> = await axios.get(`${BACKEND_URL}/api/work-experiences/${language}`);

        if (result.status == 200) {
          const experienceData = result.data;
          experienceData.sort((a, b) => Date.parse(b.startDate) - Date.parse(a.startDate));

          const workExperiences = experienceData.map((e) => mapToExperienceModel(e));

          setExperiences(workExperiences);
        } else {
          dispatch(notify({ message: t('errors.failedFetch', { topic: 'work experience' }), status: 'error' }));
        }

      } catch {
        dispatch(notify({ message: t('errors.failedFetch', { topic: 'work experience' }), status: 'error' }));
      }
    }

    loadWorkExperiences();
  }, [language]);

  return { experiences };
};

export default useExperiences;