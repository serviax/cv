import React from 'react';

interface IRecordProps {
  title: string,
  icon?: string,
  children?: React.ReactNode
}

const Record = ({ title, icon, children }: IRecordProps) => {
  const iconClass = icon != null ? `icon icon-primary-color icon-medium icon-${icon}` : '';

  return (

    <div className='columns is-gapless'>
      <div className='column is-4'>
        <span className='icon-text'>
          {iconClass ? <i className={iconClass}></i> : <i className='icon icon-medium'></i>}
          <span>{title}</span>
        </span>
      </div><div className='column'>
        {children}
      </div>
    </div >
  );
};

export default Record;