// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// == Import : local
import './inscriptionpage.scss';
// == Composant
const InscriptionPage = ({
  changeInscriptionFormValue,
  inscriptionFormData,
  submitInscriptionForm,
  errorMessageAlert,
  validationMessage,
  displayPasswordErrorMessage,
  changeDisplayPasswordErrorMessage,
}) => {
  // cette fonction éxecute la soumission du formulaire.
  const handleSubmit = (event) => {
    // annule le rafraichissement de la page
    event.preventDefault();
    if (inscriptionFormData.password !== inscriptionFormData.passwordConfirmation) {
      changeDisplayPasswordErrorMessage(true);
    }
    else {
      // execution de la fonction. Sa définition est visible dans le reducer.
      submitInscriptionForm();
      changeDisplayPasswordErrorMessage(false);
    }
  };

  // change la valeur d'une propriété dans le state pour le formulaire d'inscription.
  const handleChange = (event) => {
    // avec event on récupère le contenu de l'évènement.

    // let value = event.target.value
    let { value } = event.target;
    // const name = event.target.name
    const { name } = event.target;

    // si le nom de l'input est "age" alors on converti la valeur de l'input en nombre
    // afin d'adapter son type pour la partie back.
    if (name === 'age') {
      value = Number(value);
    }

    if (name === 'gender') {
      if (value === 'homme') {
        value = 'man';
      }
      if (value === 'woman') {
        value = 'woman';
      }
    }
    changeInscriptionFormValue(value, name);
  };

  return (
    <div className="container-fluid register-body">
      <div className="container-fluid container-page">
        <div className="container container-panel registration-panel">

          <div className="panel-title">
            <span>Rejoindre la RunMap Family</span>
          </div>

          {/* ----------------- FORMULAIRE D'INSCRIPTION ------------------ */}
          <form onSubmit={handleSubmit} className="order signup website">
            <fieldset className="user-inputs mt-0 mb-0">

              {/* ADRESSE MAIL */}
              <div className="form-group">

                <input
                  className="form-control"
                  type="email"
                  placeholder="Adresse mail"
                  id="email"
                  name="email"
                  value={inscriptionFormData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* PRÉNOM - NOM */}
              <div className="form-group">
                <div className="row">

                  {/* PRÉNOM */}
                  <div className="col-6">
                    <input
                      className="form-control"
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="Prénom"
                      value={inscriptionFormData.firstname}
                      onChange={handleChange}
                      required
                      minLength="2"
                      maxLength="64"
                    />
                  </div>

                  {/* NOM */}
                  <div className="col-6">
                    <input
                      className="form-control"
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Nom"
                      value={inscriptionFormData.lastname}
                      onChange={handleChange}
                      required
                      minLength="2"
                      maxLength="64"
                    />
                  </div>
                </div>
              </div>

              {/* AGE + VILLE */}
              <div className="form-group">
                <div className="row">
                  {/* AGE */}
                  <div className="col-3">
                    <label htmlFor="age">
                      <FontAwesomeIcon
                        icon="birthday-cake"
                        color="#FFC107"
                      />
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      id="age"
                      name="age"
                      placeholder="age"
                      value={inscriptionFormData.age}
                      onChange={handleChange}
                      min="1"
                      max="100"
                      required
                    />
                  </div>

                  <div className="col-3">
                    <label htmlFor="gender">
                      <FontAwesomeIcon
                        icon="venus-mars"
                        color="#FFC107"
                      />
                    </label>
                    <select
                      className="form-control"
                      type="text"
                      id="gender"
                      name="gender"
                      onChange={handleChange}
                      required
                    >
                      <option value="">{/**/}</option>
                      <option value="homme">Masculin</option>
                      <option value="woman">Feminin</option>
                    </select>
                  </div>

                  {/* VILLE */}
                  <div className="col">
                    <label htmlFor="city">
                      <FontAwesomeIcon
                        icon="map-marked-alt"
                        color="#FFC107"
                      />
                    </label>
                    <select
                      className="form-control"
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Ville"
                      onChange={handleChange}
                      required
                    >
                      <option value="ville 1">Ville</option>
                      <option value="ville 1">ville 1</option>
                      <option value="ville 2">ville 2</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* MOT DE PASSE */}
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Mot de passe"
                      id="password"
                      name="password"
                      value={inscriptionFormData.password}
                      onChange={handleChange}
                      required
                      minLength="8"
                      //maxLength="16"
                    />
                  </div>
                  <div className="col">
                    <input
                      className="form-control"
                      type="password"

                      placeholder="Confirmer le MdP"
                      id="passwordConfirmation"
                      name="passwordConfirmation"
                      value={inscriptionFormData.passwordConfirmation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Photo
              <div className="form-group form-avatar">
                <label
                  className="avatar-label"
                  htmlFor="avatar"
                >
                On termine par la photo ?
                  <input
                    className="form-control-file"
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/png, image/jpeg"
                  />
                </label>
              </div>
              */}

            </fieldset>

            {/* BOUTTON SUBMIT */}
            <div className="btn-login">
              <button type="submit" className="button-signup">C'est parti</button>
            </div>
            {/* LIENS CHANGEMENT DE PAGE */}
            <div className="disclaimer-text">
              <p>Retour à la <Link to="/">page d'accueil</Link></p>
              <p>Pour plus d'information <Link to="/contact">contactez-nous</Link></p>
            </div>
            {validationMessage && (
              <div className="alert alert-success" role="alert">
                {validationMessage}
              </div>
            )}
            { errorMessageAlert && (
              <div className="alert alert-danger" role="alert">
                {errorMessageAlert}
              </div>
            )}
            {/* message d'erreur si le mot de passe n'est pas correct */}
            {displayPasswordErrorMessage && (
            <div className="alert alert-danger" role="alert">
            Le mot de passe ne correspond pas. Veuillez corriger!
            </div>
            )}
          </form>

        </div>
      </div>
    </div>
  );
};

InscriptionPage.propTypes = {
  inscriptionFormData: PropTypes.object.isRequired,
  changeInscriptionFormValue: PropTypes.func.isRequired,
  submitInscriptionForm: PropTypes.func.isRequired,
  // errorMessageAlert: PropTypes.object.isRequired,
  errorMessageAlert: PropTypes.string.isRequired,
  validationMessage: PropTypes.string.isRequired,
  displayPasswordErrorMessage: PropTypes.bool.isRequired,
  changeDisplayPasswordErrorMessage: PropTypes.func.isRequired,
};

// == Export
export default InscriptionPage;
