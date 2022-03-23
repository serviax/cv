import React from 'react';
import Icon from '../Icon/Icon';
import Section from '../Section/Section';
import { useTranslation } from '../common/translations';
import { UpdateKnowledgeType } from './UpdateKnowledgeSchema';
import useLearnings from './UseLearnings';


const Learnings = () => {
  const { learnings } = useLearnings();
  const { t } = useTranslation();

  const getIconForLearningType = (type: UpdateKnowledgeType): string => {
    if (type == 'certification')
      return 'certificate';
    else if (type == 'conference')
      return 'conference';
    else if (type == 'home-project')
      return 'home';
    else if (type == 'training')
      return 'self-learn';
    else
      return '';
  };

  return (
    <Section iconName='self-learn' title={t('learnings.title')}>


      {learnings && learnings.map(overview => {
        return (<div key={overview.year} className='mb-4 is-non-breakable-for-print'>
          <div className='is-size-5 has-text-weight-bold'>{overview.year}</div>

          {overview.updates && overview.updates.map((item, idx) =>
            (<div key={idx}><Icon name={getIconForLearningType(item.type)} size='small' /> {item.description}</div>)
          )}
        </div>);
      })
      }

      <div className='content'>
        <div className='is-size-5 has-text-weight-bold'>{t('learnings.legend')}</div>
        <div className='legend'>
          <span><Icon size='small' name='self-learn' />{t('learnings.learned')}</span>
          <span><Icon size='small' name='conference' />{t('learnings.conference')}</span>
          <span><Icon size='small' name='home' />{t('learnings.homeProject')}</span>
          <span><Icon size='small' name='certificate' />{t('learnings.certificate')}</span>
        </div>
      </div>

    </Section>);
};

export default Learnings;