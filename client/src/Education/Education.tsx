import React from 'react';
import Section from '../Section/Section';
import { useTranslation } from '../translations';
import useEducation from './useEducation';

const Education = () => {
  const { education } = useEducation();
  const { t } = useTranslation();

  return (
    <Section iconName='school' title={t('education.title')}>
      <>
        <div className='content is-small'>{t('education.explanation')}</div>

        <div className='has-text-weight-bold'>{education?.name} ( {education?.designatedTitle} )</div>
        <div>{education?.schoolname}</div>
        <div>{education?.startYear} - {education?.endYear}</div>
      </>
    </Section >);
};

export default Education;