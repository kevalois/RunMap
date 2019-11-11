// == Import : npm
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// == Import : local
import './adminpage.scss';
// == Composant

const AdminPage = ({ usersData, collectUsersData, deleteUser   }) => {
  const [start, setStart] = useState(true);

  if (start) {
    collectUsersData();
    setStart(false);
  }

  const handleClick = (id) => {
    deleteUser(id);
  };

  let oulala = '';
  if (typeof usersData === 'object') {
    console.log('les users : ', usersData[0].email);
    oulala = usersData.map(((user) => ( 
      <>
        <tr>
          <th scope="row">1</th>
          <td>{user.email}</td>
          <td>{user.lastname}</td>
          <td>{user.firstname}</td>
          <td>{user.gender}</td>
          <td>{user.age}</td>
          <td>
            <button
              type="button"
              onClick={() => {
                handleClick(user.id);
              }}
            >
              <img
                className="img-admin"
                src="src/components/Page/AdminPage/trash.svg"
                alt="trash"
              />
            </button>
          </td>
        </tr>
      </>
    )));
  }

  return (
    <>
      <h1>Utilisateur</h1>
      <div className="container-fluid">
        <table className="table">
          <thead className="thead">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Email</th>
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
              <th scope="col">Genre</th>
              <th scope="col">Age</th>
              <th scope="col">Supprimer</th>
            </tr>
          </thead>
          <tbody>

            {oulala}

          </tbody>
        </table>
      </div>
    </>
  );
};


AdminPage.propTypes = {

};

// == Export
export default AdminPage;
