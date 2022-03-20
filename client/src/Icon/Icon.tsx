import React from 'react';

export interface IconProps {
  name?: string
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'huge',
  isFiller?: boolean
  color?: string
}

const Icon = ({ name, size, isFiller, color }: IconProps) => {
  const iconColor = color ?? 'primary';
  const iconSize = size ?? 'medium';
  const iconFill = isFiller == false ? '' : 'has-icon-filler';
  const iconClass = name != null ? `icon icon-${iconColor}-color icon-${iconSize} icon-${name} ${iconFill}` : '';

  return (iconClass ? <div className={iconClass}></div> : <div className='icon icon-medium'></div>);
};

export default Icon;