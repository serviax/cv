import React from 'react';
import { useTranslation } from '../translations';
import usePersonalInfo from './PersonalInfo.effect';

function PersonalInfo() {
  const { user } = usePersonalInfo();
  const { t } = useTranslation();

  return (
    <>
      <div className='block'>
        <h1>Phlips Servaas</h1>

        <div className='columns'>
          <div className='column'>
            {t('personalInfo.firstName')}
          </div>
          <div className='column'>
            {user?.firstName}
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            {t('personalInfo.lastName')}
          </div>
          <div className='column'>
            {user?.lastName}
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;