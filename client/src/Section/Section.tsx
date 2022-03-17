import React from 'react';

interface ISectionProps {
  title: string,
  children?: React.ReactNode,
  iconName?: string,
  sideComponent?: React.ReactNode
}

const Section = ({ title, iconName, children, sideComponent }: ISectionProps) => {
  const fullIconClassName = iconName != null ? `icon has-icon-filler icon-primary-color icon-x-large icon-${iconName}` : null;

  return (
    <div className='block card'>
      <div className='card-content'>
        <div className='content'>
          <div className='tile is-ancestor'>
            <div className='tile is-vertical is-3 is-parent'>
              <div className='tile is-child'>
                <div className='columns is-centered'>
                  <div className='column has-text-centered'>
                    {fullIconClassName && <i className={fullIconClassName}></i>}
                    {sideComponent}
                  </div>
                </div>
              </div></div>
            <div className='tile is-parent'>
              <div className='tile is-child'>
                <h2 className='title is-2 has-text-primary is-capitalized'>{title}</h2>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
