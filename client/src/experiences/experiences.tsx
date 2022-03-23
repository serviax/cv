import React from 'react';
import Section from '../Section/Section';
import Experience from './Experience';
import useExperiences from './UseExperiences';
import { useTranslation } from '../common/translations';

import './Experience.scss';

const Experiences = () => {
  const { experiences } = useExperiences();
  const { t} = useTranslation();

  return (
    <Section iconName='suitcase' title={t('experiences.title')}>
      <div>

        {experiences?.map((exp, index) => <Experience experience={exp} key={index}></Experience>)}
      </div>
    </Section>
  );
};


export default Experiences;