import React from 'react';
import Icon from '../Icon/Icon';

interface FieldProps {
  icon?: string;
  extraClassNames?: string;
  children?: React.ReactNode;
}

const Field = ({ icon, extraClassNames, children }: FieldProps) => {
  const wrapperClassNames = extraClassNames == null ? 'columns' : 'columns ' + extraClassNames;
  return (
    <div className={wrapperClassNames}>
      <div className='column is-1 is-collapsed-for-print'><Icon name={icon} /></div>
      <div className='column'>
        {children}
      </div>
    </div>);
};


export default Field;