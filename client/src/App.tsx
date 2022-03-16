import React, { Suspense } from 'react';
import './App.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import 'bulma/css/bulma.min.css';


import { useTranslation } from './translations';
import Keywords from './Keywords/Keywords';
import Expierences from './experiences/experiences';
import Notification from './Notifications/Notification';
import LanguageSwitcher from './LanguageSelection/LanguageSwitcher';


// const getTranslations =  async(): Promise<Array<Content>> => {
//   const translationResponse = await axios.get<Array<Content>>('http://localhost:7000/content');
//   const translations = translationResponse.data;
//   return translations;
// };


function App() {

  const { t } = useTranslation();

  const view = (
    <>
      <Notification />
      <LanguageSwitcher />
      <h1>{t('header.intro')}</h1>

      <header className='hero is-primary'>
        <div className='hero-body'>
          <p className='title has-text-centered'>C.V. Phlips Servaas</p>
        </div>
      </header>
      <PersonalInfo />
      <Keywords />
      <Expierences />
    </>
  );

  return view;
}

export default App;
