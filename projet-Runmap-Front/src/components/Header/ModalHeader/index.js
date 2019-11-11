import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalHeader = ({
  changeSignInFormValue,
  signInEmail,
  signInPassword,
  submitSignInForm,
}) => {
  const [smShow, setSmShow] = useState(false);

  const handleClose = () => setSmShow(false);
  const handleShow = () => setSmShow(true);

  // change la valeur d'une propriété dans le state pour le formulaire d'inscription.
  const handleChange = (event) => {
    // avec event on récupère le contenu de l'évènement.

    // let value = event.target.value
    const { value } = event.target;
    // const name = event.target.name
    const { name } = event.target;

    // si le nom de l'input est "age" alors on converti la valeur de l'input en nombre
    // afin d'adapter son type pour la partie back.

    console.log('changement : ', event.target.name);

    changeSignInFormValue(value, name);
  };


  const handleSubmit = () => {
    // execution de la fonction. Sa définition est visible dans le reducer.
    submitSignInForm();
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
          Connexion
      </Button>

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
      >
        <Modal.Header className="bg-warning" closeButton>
          <Modal.Title>Se connecter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form text-center">
            <div className="form-group">
              <div className="btn btn-primary">Connexion avec Facebook</div>
            </div>
            <div className="form-group">
              <div className="btn btn-danger">Connexion avec Google</div>
            </div>
            <div className="hr" />
            <div className="form-group">
              <input
                type="email"
                placeholder="adresse@email.fr"
                className="form-control form-control-lg"
                value={signInEmail}
                name="signInEmail"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Mot de passe"
                className="form-control form-control-lg"
                value={signInPassword}
                name="signInPassword"
                onChange={handleChange}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            // onClick={handleClose}
            onClick={handleSubmit}
          >
              Connexion
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalHeader;
