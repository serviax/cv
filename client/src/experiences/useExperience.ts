import React, { useEffect, useRef, useState } from 'react';
import Icon from '../Icon/Icon';
import ExperienceModel from './Experience.model';
import Field from './Field';
import useExperiences from './useExperiences';

interface IExperienceProps {
  experience: ExperienceModel,
}


const useExperience = ({ experience }: IExperienceProps) => {
  const loadedComponent = useRef(false);
  const [isCollapsed, setIsCollapsed] = useState(experience.isLongAgo);
  const [experienceBlockClasName, setExperienceBlockClasName] = useState('card-content has-background-light');

  const [iconClassName, setIconClassName] = useState('icon icon-medium icon-expand-more icon-white-color');

  useEffect(() => {
    if (isCollapsed)
      setExperienceBlockClasName('card-content has-background-light is-collapsed');
    else
      setExperienceBlockClasName('card-content has-background-light');

    if (!loadedComponent.current) {
      loadedComponent.current = true;
      return;
    }

    setIconClassName(isCollapsed ? 'icon icon-small icon-expand-more icon-white-color opening' : 'icon icon-small icon-white-color icon-expand-more closing');
  }, [isCollapsed]);


  return { experience, isCollapsed, setIsCollapsed};

};

export default useExperience;