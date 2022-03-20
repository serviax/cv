import React from 'react';
import Icon from '../Icon/Icon';

const Footer = () => {
  return (
    <footer className='mt-5 pt-4 pb-4 footer is-collapsed-for-print'>
      <div className="content has-text-centered">
        <div className='is-flex is-align-content-center is-justify-content-center'>
          <div className='is-flex is-align-items-baseline'><Icon name='info' size='small' />Online C.V. Servaas Phlips</div>
          <div className='is-flex is-align-items-baseline ml-3'><Icon name='calendar-month' size='small' /> 2022</div>
          <div className='is-flex is-align-items-baseline ml-3'><Icon name='construction' size='small' />React, Redux, NodeJS (Express) & MongoDb</div>
          <div className='is-flex is-align-items-baseline ml-3'><Icon name='account-tree' size='small' /><a href="https://github.com/serviax/cv">Code repository</a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;