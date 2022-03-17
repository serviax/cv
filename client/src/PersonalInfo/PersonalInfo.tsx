import React from 'react';
import { useTranslation } from '../translations';
import usePersonalInfo from './usePersonalInfo';
import Record from './Record';

function PersonalInfo() {
  const { user } = usePersonalInfo();
  const { t } = useTranslation();

  return (
    <div className='block card'>
      <div className='card-content'>
        <div className='content'>
          <div className='tile is-ancestor'>
            <div className='tile is-vertical is-3 is-parent'><div className='tile is-child'>
              <img src='Servaas.jpg' style={{ height: 350 }} />
            </div></div>
            <div className='tile is-parent'>
              <div className='tile is-child'>
                <h2 className='title is-2 has-text-primary'>{t('personalInfo.title')}</h2>

                <Record title={t('personalInfo.name')} icon="badge">{user?.fullName}</Record>

                <Record title={t('personalInfo.mobileNumber')} icon='mobile-phone'>{user?.mobileNumber}</Record>

                <Record title={t('personalInfo.birthDate')} icon="birthday">{user?.birthDate} </Record>

                <Record title={t('personalInfo.address')} icon="home">
                  <div>
                    {user?.addressLine}<br />
                    {user?.municipalityLine}<br />
                    {user?.countryLine}
                  </div>
                </Record>

                <Record title={t('personalInfo.driverLicense')} icon='car'>{user?.driverLicense}</Record>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;