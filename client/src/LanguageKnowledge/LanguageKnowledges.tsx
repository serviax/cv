import React from 'react';
import ProgressBar from '../Progressbar/Progressbar';
import Section from '../Section/Section';
import { useTranslation } from '../common/translations';
import useLanguageKnowledges from './useLanguages';

import './Languages.scss';

const LanguageKnowledges = () => {
  const { languages } = useLanguageKnowledges();
  const { t } = useTranslation();


  return (
    <Section iconName='language' title={t('languages.title')}>
      <div className='content languages'>
        {languages?.map((l, idx) =>
          <div className='is-block is-flex is-align-content-baseline is-align-items-baseline' key={idx}>
            <div className='mr-3 language'>{l.language} </div>
            <ProgressBar percentage={l.level * 20} />
          </div>
        )}
      </div>
    </Section>);
};

export default LanguageKnowledges;