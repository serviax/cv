import React from 'react';
import { useTranslation } from '../common/translations';
import usePersonalInfo from './usePersonalInfo';
import Record from './Record';
import ReCAPTCHA from 'react-google-recaptcha';
import './PersonalInfo.scss';

function PersonalInfo() {
  const { user, isHuman, setIsHuman, reCaptchaKey, language } = usePersonalInfo();
  const { t } = useTranslation();

  return (
    <div className='block card'>
      <div className='card-content'>
        <div className='content'>
          <div className='tile is-ancestor'>
            <div className='tile is-vertical is-4 is-parent'>
              <div className='tile is-child' >
                <picture>
                  <source type='image/webp' srcSet='Servaas.webp' />
                  <img src='Servaas.jpg' width='250' height='375' alt={t('personalInfo.profilePicture')} style={{ width: '250px' }} />
                </picture>
              </div>
            </div>
            <div className='tile is-parent'>
              <div className='tile is-child'>
                <h2 className='title is-2 has-text-primary'>{t('personalInfo.title')}</h2>

                <Record title={t('personalInfo.name')} icon="badge">{user?.fullName}</Record>

                {!isHuman && (
                  <div className='notification recaptcha'>
                    <div>{t('personalInfo.checkHuman')}</div>
                    {language == 'nl' && <ReCAPTCHA sitekey={reCaptchaKey} hl='nl' onChange={() => setIsHuman(true)} />}
                    {language == 'en' && <ReCAPTCHA sitekey={reCaptchaKey} hl='en' onChange={() => setIsHuman(true)} />}
                    {language && language != 'en' && language != 'nl' && <ReCAPTCHA sitekey={reCaptchaKey} hl='nl' onChange={() => setIsHuman(true)} />}
                  </div>)
                }

                {isHuman && (
                  <>
                    <Record title={t('personalInfo.email')} icon='email'><a href={user?.emailLink}>{user?.email}</a></Record>
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
                  </>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;