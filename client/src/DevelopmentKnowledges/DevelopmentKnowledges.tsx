import React from 'react';

import Icon from '../Icon/Icon';
import ProgressBar from '../Progressbar/Progressbar';
import Section from '../Section/Section';
import { useTranslation } from '../common/translations';
import useKnowledges from './UseKnowledges';
import './DevelopmentKnowledge.scss';

const Knowledges = () => {
  const { knowledges } = useKnowledges();
  const { t } = useTranslation();

  const firstTable = knowledges == null ? [] : [...knowledges.slice(0, Math.floor(knowledges.length / 2))];
  const secondTable = knowledges == null ? [] : [...knowledges.slice(Math.floor(knowledges.length / 2) + 1)];
  const splitTable = [firstTable, secondTable];

  return (
    <Section iconName='tag' title={t('knowledges.title')} additionalClassNames='is-non-breakable-for-print'>
      <div className='development-knowledges'>
        <div className='columns'>
          {splitTable && splitTable.map((knowledgesPart, tableIndex) =>
            <div className='column technologies' key={tableIndex}>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Technology</th>
                    <th>Level</th>
                    <th>Usage</th>
                  </tr>
                </thead>
                <tbody>
                  {knowledgesPart && knowledgesPart.map((k, idx) =>
                    <tr key={idx}>
                      <td>{k?.technology}</td>
                      <td className='technology-level'><ProgressBar percentage={k.level * 20} /></td>
                      <td className='technology-usage'>
                        {k?.usedInProject && <Icon size='small' name='company' />}
                        {k?.usedInLastYear && <Icon size='small' name='history' />}
                        {k?.usedInPersonalProject && <Icon size='small' name='home' />}
                        {k?.followedTraining && <Icon size='small' name='self-learn' />}
                      </td>
                    </tr>
                  )
                  }
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className='content'>
          <div className='is-size-5 has-text-weight-bold'>{t('knowledges.legend')}</div>
          <div className='legend'>
            <span><Icon size='small' name='company' />{t('knowledges.usedInProject')}</span>
            <span><Icon size='small' name='history' />{t('knowledges.recentlyUsed')}</span>
            <span><Icon size='small' name='home' />{t('knowledges.usedInHomeProject')}</span>
            <span><Icon size='small' name='self-learn' />{t('knowledges.learned')}</span>
          </div>
        </div>
      </div>

    </Section>
  );
};

export default Knowledges;