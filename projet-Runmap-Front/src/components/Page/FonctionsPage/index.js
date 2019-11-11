import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './fonctionsPage.scss';

const FonctionsPage = () => (
  <>
    {/* Haut de page */}
    <div className="header-FonctionsPage">
      <div className="container">
        <div className="row row-container align-items-center">
          <div className="col-sm col-text">
            <h2 className="text-uppercase  font-weight-bold">
              Demain j'irais courir sur piste grâce à la <span className="text-warning">RunMap Family</span>
            </h2>
          </div>
          <div className="col-sm">
            {/* Laisser vide */}
          </div>
        </div>
      </div>
    </div>

    {/* Fonctions résumée */}
    <div className="fonctions-resume">
      <div className="container-fluid m-1">
        <div className="row">
          <div className="col-sm col-fonctions mr-1">
            <div className="logo-texte">
              <FontAwesomeIcon icon="search-location" className="icon-logo" />
              <p className="text-muted text-icon">Je cherche</p>
            </div>
          </div>
          <div className="col-sm col-fonctions mr-1">
            <div className="logo-texte">
              <FontAwesomeIcon icon="map-marker-alt" className="icon-logo" />
              <p className="text-muted text-icon">Je trouve</p>
            </div>
          </div>
          <div className="col-sm col-fonctions mr-1">
            <FontAwesomeIcon icon="running" className="icon-logo" />
            <p className="text-muted text-icon">Je cours</p>
          </div>
        </div>
      </div>
    </div>

    {/* image + slogan */}
    <div className="just-img">
      <div className="just-img-text">
        <div className="container">
          <div className="row">
            <div className="col-sm col-text-just-img">
              <div className="col-intext-just-img">
                <h3>Si tu pense encore que <span className="text-dark">courir sur piste</span> c'est courir sous licence, c'est que tu ne connais pas <span className="text-dark">RunMap</span>.</h3>
              </div>
            </div>
            <div className="col-sm">
              {/* Colone à laisser vide */}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* explications courte du projet */}
    <div className=" container container-descript">
      <div className="container-descript-content">
        <div className="content-title">
          <p>L'entraînement comme les pros, pour tous.</p>
        </div>
        <div className="content-text text-muted">
          <p>Visiter <span className="text-warning font-weight-bold">RunMap</span> avant son entraînement, c'est trouver une piste d'athlétisme accessible sans licence FFA. Il suffit de <a href="#">se rendre ici</a> et de renseigner le nom de la ville. Si la <span className="text-warning font-weight-bold">RunMap Family</span> est déjà présente près de chez toi, les pistes y seront reférencée.</p>
        </div>
      </div>
    </div>

    <div className="container container-mapping">
      <div className="row">
        <div className="col-sm col-map">
          <div className="img-map">
            {/* image map */}
          </div>
        </div>
        <div className="col-sm col-content-map">
          <div className="content-map-title">
            <p>Une localisation simple</p>
          </div>
          <div className="content-map-text text-muted">
            <p>Un système calqué sur celui du leader du marché de localisation : Google. Nous proposons une solution de localisation aussi clair. Localiser sa piste d'entrainement devient un vrais jeu d'enfant.</p>
          </div>
        </div>
      </div>
    </div>

  </>
);

export default FonctionsPage;