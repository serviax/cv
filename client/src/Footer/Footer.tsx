import React from 'react';
import Icon from '../Icon/Icon';

const Footer = () => {
  return (
    <footer className='mt-5 pt-4 pb-4 footer is-collapsed-for-print'>
      <div className="content has-text-centered">
        <div className='is-flex is-align-content-center is-justify-content-center'>
          <div className='is-flex is-align-items-baseline'><Icon name='info' size='small' />Online C.V. Servaas Phlips</div>
          <div className='is-flex is-align-items-baseline ml-3'><Icon name='calendar-month' size='small' /> 2022</div>
          <div className='is-flex is-align-items-baseline ml-3'><Icon name='construction' size='small' /> React, NodeJS (Express) and MongoDb</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;