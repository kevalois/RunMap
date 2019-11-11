import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Logo from 'src/components/Footer/Logo';
import NavigationMenu from 'src/components/Footer/NavigationMenu';
import NavigationFellow from 'src/components/Footer/NavigationFellow';
import NavigationFamily from 'src/components/Footer/NavigationFamily';

import './footer.scss';

// composant
const Footer = () => {

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">

            <div className="col-sm-3">
              <Logo />
            </div>

            <div className="col-sm-3 nav-group">
              <h5>Menu</h5>
              <NavigationMenu />
            </div>

            <div className="col-sm-3 nav-group">
              <h5>Nous suivre</h5>
              <NavigationFellow />
            </div>

            <div className="col-sm-3 nav-group">
              <h5>Runmap family</h5>
              <NavigationFamily />
            </div>
          </div>
        </div>
      </div>
      {/* <NewsLetterInvitation /> */}

    </>
  )
}

Footer.propTypes = {
  
};

// == Export
export default Footer;
