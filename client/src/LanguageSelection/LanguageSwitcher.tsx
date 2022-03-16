import React from 'react';
import useLanguageSwitcher from './useLanguageSwitcher';
import DropdownMenu from '../Dropdown/Dropdown';
import '../styles/flags.css';

const LanguageSwitcher = () => {
  const { languageMenu } = useLanguageSwitcher();
  return (
    <>
      <DropdownMenu menu={languageMenu} />
    </>
  );
};

export default LanguageSwitcher;