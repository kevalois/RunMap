import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import : local


// composant
const NavigationFamily = () => {

  return (
    <>
      <ul className="list-nav"> 
        <li> <NavLink to="/inscription" exact>S'inscrire</NavLink> </li>
        <li> <NavLink to="/contact" exact>Nous contacter</NavLink> </li>
        <li> <NavLink to="/ajouter" exact>Ajouter une ville</NavLink> </li>
        <li> <NavLink to="/ajouter" exact>Ajouter un lieu</NavLink> </li>
      </ul>
    </>
  )
}

NavigationFamily.propTypes = {
  
};

// == Export
export default NavigationFamily;
