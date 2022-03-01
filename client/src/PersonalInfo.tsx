import React from 'react';
import { useTranslation } from './translations';

function PersonalInfo() {
  const { t } = useTranslation();

  return (
    <div className='block'>
      <h1>Phlips Servaas</h1>

      <div className='columns'>
        <div className='column'>
          {t('personalInfo.firstName')}
        </div>
        <div className='column'>
          Servaas
        </div>
      </div>
      <div className='columns'>
        <div className='column'>
          {t('personalInfo.lastName')}
        </div>
        <div className='column'>
          Phlips
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;