import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import './styles/icons.css';

import PersonalInfo from './PersonalInfo/PersonalInfo';

import { useTranslation } from './translations';
import Keywords from './Keywords/Keywords';
import Expierences from './experiences/experiences';
import Notification from './Notifications/Notification';
import LanguageSwitcher from './LanguageSelection/LanguageSwitcher';


function App() {

  const { t } = useTranslation();

  const view = (
    <>
      <div className='main'>
        <Notification />


        <div className='language-switch'>
          <LanguageSwitcher />
        </div>

        <header className='block hero is-primary'>
          <div className='hero-body'>
            <p className='title has-text-centered'>C.V. Phlips Servaas</p>
          </div>
        </header>

        <div className='container'>
          <PersonalInfo />
          <Keywords />
          <Expierences />
        </div>
      </div>
    </>
  );

  return view;
}

export default App;
