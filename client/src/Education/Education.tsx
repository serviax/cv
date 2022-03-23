import React from 'react';

import Section from '../Section/Section';
import { useTranslation } from '../common/translations';
import useEducation from './UseEducation';

const Education = () => {
  const { education } = useEducation();
  const { t } = useTranslation();

  return (
    <Section iconName='school' title={t('education.title')}>
      <>
        <div className='content is-small'>{t('education.explanation')}</div>

        <div className='is-flex is-flex-direction-column'>
          <div className='has-text-weight-bold'>{education?.name} ( {education?.designatedTitle} )</div>
          <div className='ml-2'>{education?.schoolName}</div>
          <div className='ml-2'>{education?.startYear} - {education?.endYear}</div>
        </div>
      </>
    </Section >);
};

export default Education;