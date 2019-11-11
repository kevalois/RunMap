// == Import : npm
import React from 'react';
import DropdownHeader from 'src/components/Header/DropdownHeader';
import PropTypes from 'prop-types';
import ModalHeader from 'src/containers/Header/ModalHeader';
import ButtonAdmin from 'src/components/Header/ButtonAdmin';
import { Link } from 'react-router-dom';




// == Composant
const HeaderSection = ({ logged, loggedAdmin, user }) => {
  console.log('USER :', user);
  
  return (
  
  <nav
    className="navbar navbar-expand-lg navbar-light bg-light"
  >

    {/* Début - RUNMAP */}
    <Link
      to="/"
      className="navbar-brand text-uppercase"
    >
    Run<b className="text-warning">map</b>
    </Link>
    {/* FIN - RUNMAP */}

    <div className="ml-auto" id="">

      {/* Début - Bouton de connexion */}
      <form className="form-inline my-2 my-lg-0 ml-auto">
        {!logged && (
          <ModalHeader />
        )}

        {logged && (
          <DropdownHeader />
        )}

        {logged && (
          <ButtonAdmin />
        )}

      </form>
      {/* Fin - Bouton de connexion */}

    </div>
  </nav>

)};

HeaderSection.PropTypes = {
  logged: PropTypes.bool.isRequired,
  loggedAdmin: PropTypes.bool.isRequired,
};

// == Export
export default HeaderSection;
