import { t } from 'i18next';
import React, { useEffect, useRef, useState } from 'react';
import Icon from '../Icon/Icon';
import { useTranslation } from '../translations';
import ExperienceModel from './Experience.model';
import './Experience.scss';
import Field from './Field';

interface IExperienceProps {
  experience: ExperienceModel,
}


const Experience = ({ experience }: IExperienceProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [experienceBlockClasName, setExperienceBlockClasName] = useState('');
  const [iconClassName, setIconClassName] = useState('');
  const { t } = useTranslation();


  useEffect(() => {
    if (experience.isLongAgo)
      setIsCollapsed(true);
  }, []);

  useEffect(() => {
    let blockName = 'card-content has-background-light ';
    let iconName = 'icon icon-medium icon-white-color icon-expand-more ';
    
    iconName = isCollapsed ? iconName + 'closing ' : iconName + 'opening ';
    blockName = isCollapsed ? blockName + 'closing ' : blockName + 'opening ';

    setIconClassName(iconName);
    setExperienceBlockClasName(blockName);
  }, [isCollapsed]);

  return (
    <div className='card experiences'>

      <header className='card-header has-background-primary'>
        <div className='card-header-title has-text-info-light is-size-5 is-flex'>
          <div className='icon-text is-flex is-justify-content-space-between is-clickable experience-header' onClick={() => setIsCollapsed(!isCollapsed)}>
            <div className='is-flex is-align-items-baseline'>
              <Icon name='company' color='white' />
              <span>{experience.companyName}</span>
              <div className='pl-2'> ({experience.startDate}
                {experience.endDate && experience.startDate != experience.endDate && <> - {experience.endDate}</>}
                {!experience.endDate && <> - {t('experiences.today')}</>}
                )
              </div>

            </div>
            <div className='is-flex command-buttons'>
              <i className={iconClassName} />
            </div>
          </div>
        </div>
      </header>

      <div className={experienceBlockClasName}>
        {experience.description && <div className='mb-3'>{experience.description}</div>}

        {experience.projects && experience.projects.map((project, idx) =>
          <div className='project-details box' key={idx}>
            <div>
              <Field icon='terminal' extraClassNames='has-text-weight-bold'>
                <span>{project.role} - {project.title}</span>
                {project.startDate && <span> (
                  {project.startDate}
                  {project.endDate && project.startDate != project.endDate && <> - {project.endDate}</>}
                  {!project.endDate && <> - {t('experiences.today')}</>}
                  )
                </span>}
              </Field>
              {project.description && <Field icon='info' extraClassNames='has-text-weight-bold'>{project.description}</Field>}

              {project.tasks && <Field icon='task' extraClassNames='is-align-items-flex-start'><ul>{project.tasks.map((t, idx2) => <li key={idx2}>{t}</li>)}</ul></Field>}
              {project.keywords && <Field icon='tag'>{project.keywords.join(', ')}</Field>}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Experience;