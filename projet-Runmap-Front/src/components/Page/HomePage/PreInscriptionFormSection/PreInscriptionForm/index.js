import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import './PreInscriptionForm.scss';

// composant
const PreInscriptionForm = () => (
  <>
    <div className="signup-form-group">
      <div className="sign-up-form">
        <div className="sign-up-form">
          {/* Bouton Facebook */}
          <button
            type="button"
            className="signup-button-fb facebook-signup-button"
            href="##"
          >
            S'inscrire avec Facebook
          </button>
          <div className="hr">
            <div className="hr-text">OU</div>
          </div>
          <Link to="/inscription">
            <button
              type="button"
              className="signup-button-email email-signup-button"
            >
              Avec mon adresse Mail
            </button>
          </Link>
          <div className="disclaimer-text">
            <p>En vous inscrivant sur <span>RunMap</span> vous acceptez les <a href="#">conditions d'utilisation</a>. Pour plus d'information <a href="#">contactez-nous</a> .</p>
            <p className="disclaimer-signup">Vous este déjà membre ? <a href="#">Connectez-vous</a></p>
          </div>
        </div>
      </div>
      {/* input,label pour l'e-mail */}
      {/*
        <label
        htmlFor="pre-inscription-email"
      >
          Adresse e-mail
        <input
          type="email"
          id="pre-inscription-email"
          name="email"
          placeholder="adresse e-mail"
          value={inscriptionFormData.email}
          onChange={(event) => setInscriptionFormData({
            ...inscriptionFormData,
            email: event.target.value,
          })}
        />
        </label>
      */}
      {/* input,label pour le mot de passe */}
      {/*
        <label htmlFor="pre-inscription-password">
          Mot de passe
        <input
          type="password"
          id="pre-inscription-password"
          name="password"
          value={inscriptionFormData.password}
          placeholder="mot de passe"
          onChange={(event) => setInscriptionFormData({
            ...inscriptionFormData,
            password: event.target.value,
          })}
        />
      </label>
      */}
      {/* boutton qui emmène à la page d'inscription emmène à la page d'inscription */}
      {/* 
        <button type="button">
        <NavLink to="/inscription" exact>Je m'inscris</NavLink>
        </button> 
      */}
    </div>
  </>
);

// == Export
export default PreInscriptionForm;
