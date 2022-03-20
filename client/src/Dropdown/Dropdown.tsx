import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { DropdownModel } from './Dropdown.model';
import useDropdownMenu from './useDropdown';

import './Dropdown.scss';

interface IDropdownMenuProps {
  menu: DropdownModel
}

const DropdownMenu = ({ menu }: IDropdownMenuProps) => {
  const loadedComponent = useRef(false);
  const { menuItems, toggleMenuActive, isMenuActive } = useDropdownMenu(menu);
  const [dropdownMenuClass, setDropdownMenuClass] = useState('icon icon-small icon-expand-more');
  const [containerClassName, setContainerClassname] = useState('dropdown');

  useEffect(() => {
    if (!loadedComponent.current) {
      loadedComponent.current = true;
      return;
    }

    setContainerClassname(isMenuActive ? 'dropdown is-active' : 'dropdown');
    setDropdownMenuClass(isMenuActive ? 'icon icon-small icon-expand-more opening' : 'icon icon-small icon-expand-more closing');
  }, [isMenuActive]);

  return (<div className={containerClassName} onClick={() => toggleMenuActive()}>
    <div className='dropdown-trigger'>
      <button className='button' aria-haspopup='true' aria-controls='dropdown-menu'>
        <div className='dropdown-head-content'>
          {menu.selectedItem != null ? (<span>{menu.selectedItem.icon && (<span className={menu.selectedItem.icon}></span>)} {menu.selectedItem.value}</span>) : <span>menu.noItemSelected</span>}
        </div>
        <span className={dropdownMenuClass}></span>
      </button>
      <div className='dropdown-menu' id='language-dropdown-menu' role='menu'>
        <div className='dropdown-content'>
          {
            menuItems && menuItems.map(item => {
              let itemClassName = 'dropdown-item app-dropdown-item';
              if (menu.selectedItem != null && item.key === menu.selectedItem.key)
                itemClassName += ' has-background-dark has-text-light';

              return (
                <a key={item.key} role='menuitem' className={itemClassName} onClick={() => item.onSelect && item.onSelect(item) && menu.selectedItem == item}>
                  {item.icon && (<span className={item.icon}></span>)}
                  {item.value}
                </a>
              );
            })
          }
        </div>
      </div>
    </div>
  </div>);
};

DropdownMenu.propTypes = {
  menu: PropTypes.object.isRequired
};


export default DropdownMenu;
