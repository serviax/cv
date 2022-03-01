import React, { useEffect } from 'react';
import './App.css';
import PersonalInfo from './PersonalInfo';
import 'bulma/css/bulma.min.css';


import {useTranslation } from './translations';


// const getTranslations =  async(): Promise<Array<Content>> => {
//   const translationResponse = await axios.get<Array<Content>>('http://localhost:7000/content');
//   const translations = translationResponse.data;
//   return translations;
// };


function App() {

  const { t } = useTranslation();
  
  const x = (
    <>
      <h1>{t('header.intro')}</h1>

      <header className='hero is-primary'>
        <div className='hero-body'>
          <p className='title has-text-centered'>C.V. Phlips Servaas</p>
        </div>
      </header>
      <PersonalInfo />
    </>
  );

  return x;
}

export default App;
