import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import './buttonAdmin.scss';

const ButtonAdmin = () => (

  <button type="button" className="btn btn-danger ml-1">
    <NavLink className="admin-lien" to="/admin" exact>
      <FontAwesomeIcon icon="user-cog" /> <b>Admin</b>
    </NavLink>
  </button>

);

export default ButtonAdmin;