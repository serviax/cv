import { useState } from 'react';
import { DropdownModel } from './Dropdown.model';

const useDropdown = (menu: DropdownModel) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuItems = menu.items;
  const toggleMenuActive = () => setIsMenuActive((val) => !val);

  return { menu, menuItems, isMenuActive, setIsMenuActive, toggleMenuActive };
};

export default useDropdown;