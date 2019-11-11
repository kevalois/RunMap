// == Import : npm
import React, { useEffect, useState, Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { baseUri, placeDetails } from 'src/store/vars_route';
import Rater from 'react-rater';

// == Import : local
import AutoComplete from 'src/containers/Page/SearchPage/AutoComplete';
import Mapbox from 'src/components/Page/SearchPage/Mapbox';
import 'react-rater/lib/react-rater.css';
import './searchpage.scss';
// == Composant
const SearchPage = ({
  places,
  numberOfPlaces,
  userSearchInput,
  submitSearchForm,
  collectCities,
  collectPlaces,
  allPlaces,
  changeLatLong,
  collectLatLong,
  latlong,
  allPlacesWithGeocode,
  allPlacesGeocode,
  reviewContent,
  changeUserReview,
  reviewSubmit,
  userId,
}) => {
  // console.log('voici la liste des stades pour le lieu séléctionné : ', places);

  

  const [start, setStart] = useState(true);

  if (start) {
    collectPlaces();
    collectCities();
    setStart(false);
  }

  // ------ gestion de la modale ---------
  const [show, setShow] = useState(false);
  // recuperer les infos de places et distribuer dans la modale
  const [placeAgain, setPlace] = useState('');
  // recuperer les infos des reviews et distribuer dans la modale
  const [reviews, setReviews] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = (placeId) => {
    setShow(true);
    console.log('je suis là', placeId);

    // TODOS remettre tout en place comme avec le middleware pour afficher la modale avec ce que je reçois en response de la requete.
    axios.get(`${baseUri}${placeDetails}${placeId}`)
      .then((response) => {
        console.log('Les détails d\'une place avec commentaires : ', response.data);

        // response.data.place pour récuperer les détails d'une place.
        // setPlace(response.data.place);

        // response.data.place.review pour recuperer tous les reviews.
        // setReviews(response.data.place.reviews);
      })
      .catch((error) => {
        console.log('Apparement ça ne marche pas pour récuperer les infos sur une place : ', error);
      })
      .finally(() => {
      });
  };

  // -------------------------------------


  const handleSubmit = (event) => {
    // annule l'action par défaut du formulaire
    event.preventDefault();
    // execution d'une action en vue de faire une requete à l'api symfony
    submitSearchForm();
  };

  // let modalPlaceDetail = '';
  // console.log(modalPlaceDetail);

  // const handleClick = (event) => {
  //   console.log(event.target);

  // };

  return (
    <>
      <div className="container-result-search">

        {/* TITRE */}
        <div className="container container-title-results">
          <div className="title-result">
            {/* affichage du nombre lieux trouvées */}
            {/* <h2>Nous avons trouvé {numberOfPlaces}
              { (numberOfPlaces <= 1) && ' lieu ' }
              { (numberOfPlaces > 1) && ' lieux ' }
              {userSearchInput}
            </h2> */}
          </div>
        </div>

        {/* SEARCHBAR */}

        {/*
          création d'une liste de résultats,
          en fonction des données récupérés suite à la requête
        */}
        {/* { places.map((place) => (
          <div
            key={place.id}
            className="container card result-card mb-2"
            id={place.id}
            onClick={() => {
              handleShow(place.id);
            }}
          >
            <div className="row">
              <div className="col-lg-2 avatar-stade" />
              <div className="col-md header">
                <h3 className="info-header-name"> {place.name} </h3>
                <p className="adresse-stade"> {place.adress} </p>
                <p className="info-horaires">{place.schedule}</p>
              </div>
              <div className="dashboard-stade">
                <FontAwesomeIcon
                  icon="comment"
                  className="m-2"
                />
                <FontAwesomeIcon icon="cog" className="m-2" />
              </div>
            </div>

          </div>
        ))} */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>

              <div className="container header-modal">
                <div className="info-header-name">
                  Stade Pierre Mauroy
                </div>
                <div className="adresse-stade">
                  RUE PIERRE MAUROY - VILLENEUVE D'ASCQ
                </div>
                <div className="stade-avis">
                  <Rater
                    rating={0}
                    total={5}
                  />
                  <span className="text-muted infos-avis ml-1">2O avis</span>
                </div>
              </div>

              <div className="informations-stade">
                <h6 className="titre-infos-stade">
                  <FontAwesomeIcon
                    icon="info-circle"
                    color="orange"
                  /> <b>Informations complémentaire :</b>
                </h6>
                <p>Le club de foot privatise le stade pour ses entrainements.</p>
              </div>
              
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="">
              <textarea
                className="form-control"
                placeholder="Écrivez votre commentaire"
                id="exampleFormControlTextarea1"
                rows="3"
              />
              <Button className="btn-warning btn-ajout" onClick={handleClose}>
                Ajouter
              </Button>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <p>Author</p>
                <p>note sur 5</p>
                <p>created_at</p>
                <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
              </li>
              <li className="list-group-item">
                <p>Author</p>
                <p>note sur 5</p>
                <p>created_at</p>
                <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </Modal.Body>
          {/* Inutile car il y a la petite croix dans le header */}
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Fermer
            </Button>
          </Modal.Footer> */}
        </Modal>
          <div className="container row-no-padding"></div>
     
        <Mapbox
          className="row"
          submitSearchForm={submitSearchForm}
          userSearchInput={userSearchInput}
          allPlaces={allPlaces}
          changeLatLong={changeLatLong}
          collectLatLong={collectLatLong}
          latlong={latlong}
          allPlacesWithGeocode={allPlacesWithGeocode}
          allPlacesGeocode={allPlacesGeocode}
          places={places}
          reviewContent={reviewContent}
          changeUserReview={changeUserReview}
          reviewSubmit={reviewSubmit}
          userId={userId}
        />
      </div>

    </>
  );
};

// Validation de types des props du composant
SearchPage.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
  numberOfPlaces: PropTypes.number.isRequired,
  submitSearchForm: PropTypes.func.isRequired,
  userSearchInput: PropTypes.string,
  collectCities: PropTypes.func.isRequired,
};

// la valeur du champs de recherche n'est pas obligatoire
// cependant par défaut elle doit être undefined
SearchPage.defaultProps = {
  userSearchInput: '',
  places: '',
};

// == Export
export default SearchPage;
