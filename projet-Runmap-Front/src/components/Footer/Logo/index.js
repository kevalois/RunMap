import React from 'react';
import PropTypes from 'prop-types';

// == Import : local


// composant
const Logo = () => {

  return (
    <>
      <h1 className="logo" id="logo">RUNMAP</h1>
      <div className="footer-copyright"> ©2019 - Project RunMap </div>
    </>
  )
}

Logo.propTypes = {
  
};

// == Export
export default Logo;
