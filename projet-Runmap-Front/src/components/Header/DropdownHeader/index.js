import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DropdownHeader = () => (
  <Dropdown>
    <Dropdown.Toggle variant="warning">
      <FontAwesomeIcon icon="user" /> <b>Member</b>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item eventKey="1"><NavLink to="/ajouter" exact>Ajouter un lieu</NavLink></Dropdown.Item>
      <Dropdown.Item eventKey="2"><a>Modifier un lieu</a></Dropdown.Item>
      <Dropdown.Item eventKey="3"><a>Profil</a></Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4"><a>Deconnexion</a></Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default DropdownHeader;
