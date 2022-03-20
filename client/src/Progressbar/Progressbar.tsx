import React from 'react';
import './ProgressBar.scss';

interface ProgressBarProps {
  percentage: number|string;
}


const ProgressBar = ({ percentage }: ProgressBarProps) => {
  const nearestVisualPercentage= 10 * Math.round(Number(percentage) / 10);

  const innerProgressBarClassName = `is-progress-bar-content-filled-${nearestVisualPercentage}`;
  return (
    <div className='is-progress-bar-small'>
      <div className={innerProgressBarClassName}></div>
    </div>
  );
};

export default ProgressBar;