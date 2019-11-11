import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local


// composant
const NavigationFellow = () => {

  return (
    <>
      <ul className="list-nav">
        <li> <NavLink to="/contact" exact>Facebook</NavLink> </li>
        <li> <NavLink to="/contact" exact>#RunMapFr</NavLink> </li>
        <li> <NavLink to="/contact" exact>Twitter</NavLink> </li>
        <li> <NavLink to="/contact" exact>YouTube</NavLink> </li>
      </ul>
    </>
  )
}

NavigationFellow.propTypes = {
  
};

// == Export
export default NavigationFellow;
