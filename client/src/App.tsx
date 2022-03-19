import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import './styles/icons.scss';

import PersonalInfo from './PersonalInfo/PersonalInfo';

import Keywords from './Keywords/Keywords';
import Expierences from './experiences/experiences';
import Notification from './Notifications/Notification';
import LanguageSwitcher from './LanguageSelection/LanguageSwitcher';
import Footer from './Footer/Footer';
import Knowledges from './DevelopmentKnowledges/DevelopmentKnowledges';
import LanguageKnowledges from './LanguageKnowledge/LanguageKnowledges';
import Education from './Education/Education';
import ProgressBar from './Progressbar/Progressbar';
import Learnings from './Learnings/Learnings';


function App() {
  const view = (
    <div className='has-background-light'>
      <div className='main'>
        <Notification />


        <div className='language-switch is-collapsed-for-print'>
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
          <Education />
          <Knowledges />

          <Expierences />
          <LanguageKnowledges />
          <Learnings />
        </div>
      </div>

      <Footer />
    </div>
  );

  return view;
}

export default App;
