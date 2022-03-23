import React from 'react';
import useLanguageSwitcher from './UseLanguageSwitcher';
import DropdownMenu from '../Dropdown/Dropdown';

import '../styles/flags.css';
import './LanguageSwitcher.scss';

const LanguageSwitcher = () => {
  const { languageMenu } = useLanguageSwitcher();
  return (
    <div className='languageSwitcher'>
      <DropdownMenu menu={languageMenu} />
    </div>
  );
};

export default LanguageSwitcher;