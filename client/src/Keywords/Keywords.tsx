import React from 'react';
import Section from '../Section/Section';
import { useTranslation } from '../common/translations';
import useKeyWords from './useKeywords';

const Keywords = () => {
  const { keyWords } = useKeyWords();
  const { t } = useTranslation();

  return (
    <Section iconName='tag' title={t('keywords.title')}>
      <div>{keyWords?.map(k => k.keyWord).join(', ')}</div>
    </Section>);
};

export default Keywords;