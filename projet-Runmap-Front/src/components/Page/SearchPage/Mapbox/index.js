import React, { useState, useRef, useEffect } from 'react';


// import "mapbox-gl/dist/mapbox-gl.css";
import Button from 'react-bootstrap/Button';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-bootstrap/Modal';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import MapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import PropTypes from 'prop-types';
import axios from 'axios';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import AutoComplete from 'src/containers/Page/SearchPage/AutoComplete';
import PlacePin from './PlacePin';
import './mapbox.scss';

// https://programmingwithmosh.com/react/simple-react-autocomplete-component/
const MapBox = ({
  submitSearchForm,
  userSearchInput,
  allPlaces,
  reviewContent,
  changeLatLong,
  collectLatLong,
  latlong,
  changeUserReview,
  reviewSubmit,
  createReviewRoute,
  userId,
  // allPlacesWithGeocode,
  // allPlacesGeocode,
}) => {
  // TODO: lors de la requete la réponse que j'obtiens c'est d'abord la longitude puis latitude
  // du coup je dois faire une requete vers l'api pour une ville pour avoir ces coordonnées.
  // je dois injecter sur la map les coordonées de tous les places présents dans la bdd sous forme de marqueur

  // console.log('allPlaces dans Mapbox : ', allPlaces);
  // console.log('LATLONGLATLONGLATLONGLATLONG : ', latlong);


  // console.log('longueur de all place : ', allPlaces.length);
  // for (let i = 0; i < allPlaces.length; i++) {
  //   console.log('le nom de chaque lieu : ', allPlaces[i].name);
  // }


  // places.map((place) => console.log('je suis une place : ', place));
  const [viewport, setViewport] = useState({
    // width: 'auto',
    // height: '100vh',
    latitude: 48.98806,
    longitude: 2.23056,
    zoom: 5,
    // bearing:0,
    pitch: 0,
  });

  const [style, setStyle] = useState('mapbox://styles/mapbox/outdoors-v10?optimize=true');


  const mapRef = React.createRef();

  const newCoordonates = (latitude, longitude) => {
    setViewport({
      ...viewport,
      latitude,
      longitude,
      zoom: 11,
      transitionInterpolator: new FlyToInterpolator({ speed: 2 }),
      transitionDuration: '3000',
    });
  };

  const handleSubmit = (event) => {
    // annule l'action par défaut du formulaire
    event.preventDefault();
    // execution d'une action en vue de faire une requete à l'api symfony
    submitSearchForm();

    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${userSearchInput}.json?access_token=pk.eyJ1IjoiamVhbi1jaHJpc3RvcGhlOTciLCJhIjoiY2sybm1seDhhMG82MDNsbno3MzM0YnA1ayJ9.S2WLt5sQgh-5V_xYo6aPFg.dcfrdvAqRv1MshVt4ijgng.Or19S7KmYPHW8YjRz82v6g&cachebuster=1572704013602&autocomplete=false&country=fr&types=place&limit=1`)
      .then((response) => {
        const cityLatitude = response.data.features[0].center[1];
        const cityLongitude = response.data.features[0].center[0];
        newCoordonates(cityLatitude, cityLongitude);
      })
      .catch((error) => {
      })
      .finally(() => {
      });
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );

  // TODO:
  // OK 1. récuperer toutes les places.
  // 2. modifier le contenu avec map() pour avoir pour chaque place la longitude et la lattitude grace au nom de la rue et la ville.
  // 3. faire un forEach pour chaque marqueur en injectant la longitude et la lattitude
  // 4 injecter dans le overlay les infos de surface au sujet du stade
  // 5 quand on double click sur le marqueur ou le overlay, on affiche une modale avec les détails du lieu

  // console.log('la latitude d\'une place : ', allPlaces[0].latitude);


  // AU FINAL POUR FAIRE LA FUSION
  // for (let i = 0; i < allPlaces.length; i++) {
  //   console.log('je suis une place : ', allPlaces[i].name);
  // console.log('je suis une geol : ', geoLocateArray[i]);
  // console.log ('je suis une Geo : ', GeoLocateArray[i]);
  // allPlaces[i].latitude = GeoLocateArray[i].latitude;
  // .push({ ...GeoLocateArray[i] });
  // }

  // if (typeof allPlaces === 'object') {
  //   if (latlong === undefined) {
  //     collectLatLong();
  //   }
  // }

  // if (typeof allPlaces === 'object' && typeof latlong === 'object') {
  //   console.log('allPlaces : ', allPlaces);
  //   const huhu = allPlaces.forEach((place) => console.log('huhu'));
  //   for (let i = 0; i < allPlaces.length; i++) {
  //     // console.log ('je suis une place : ', allPlaces[i].name);
  //     // console.log ('je suis une geo : ', latlong[i]);
  //     allPlaces[i].latitude = latlong[i].latitude;
  //     allPlaces[i].longitude = latlong[i].longitude;
  //   }
  //   // console.log('allPlacesGeocode, ' ,allPlaces);
  //   // allPlacesWithGeocode(allPlaces);
  //   console.log(allPlaces);
  // }

  console.log(allPlaces);

  const a = 48.98806;
  const b = 2.23056;

  const [show, setShow] = useState(false);
  const [placeData, setPlaceData] = useState('');
  const [displayPlaceData, setDisplayPlaceData] = useState(false);

  const handleClose = () => {
    setShow(false);
    setPlaceData('');
    setDisplayPlaceData(false);
  };

  const handleShow = (place) => {
    setShow(true);
    console.log(place);
    setPlaceData(place);
    console.log('PLACE', place);
    console.log('PLACE.REVIEWS', place.reviews);
    // console.log('PLACE.REVIEWS.commentary', place.reviews[0].commentary);
    setDisplayPlaceData(true);
  };

  // gestion de l'envoi d'un review
  const handleChange = (event) => {
    const { value } = event.target;
    // id de la place actuelle
    changeUserReview(value);
    console.log('value', value);
  };

  const handleReviewSubmit = () => {

    console.log('je soumets la review');
    reviewSubmit(placeData.id);
   }

  return (
    <>
      <MapGL
        width="500"
        height="93vh"
        mapRef={mapRef}
        {...viewport}
        mapStyle={style}
        onViewportChange={(viewPort) => setViewport({ ...viewPort })}
        mapboxApiAccessToken="pk.eyJ1IjoiamVhbi1jaHJpc3RvcGhlOTciLCJhIjoiY2sybm1seDhhMG82MDNsbno3MzM0YnA1ayJ9.S2WLt5sQgh-5V_xYo6aPFg"
      >
        <div className="container w-25 p-2  ml-0 mt-0">
          <form>
            <AutoComplete />
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-warning d-none"
            >
              Rechercher
            </button>
          </form>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>

              <div className="container header-modal">
                <div className="info-header-name">
                  {placeData.name}
                </div>
                <div className="adresse-stade">
                  {placeData.adress}
                </div>

                {/* en commentaire pour le moment le temps de la présentation */}
                {/* <div className="stade-avis">
                  <Rater
                    rating={0}
                    total={5}
                  />
                  <span className="text-muted infos-avis ml-1">2O avis</span>
                </div> */}
              </div>

              <div className="informations-stade">
                <h6 className="titre-infos-stade">
                  <FontAwesomeIcon
                    icon="info-circle"
                    color="orange"
                  /> <b>Informations complémentaire :</b>
                </h6>
                <p>{placeData.complementInfo}</p>
              </div>

            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="">
              <Rater
                // TODO: mettre en place le rater
                rating={5}
                total={5}
                interactive="true"
                // onChange={handleChange}
              />
              <textarea
                value={reviewContent}
                onChange={handleChange}
                className="form-control"
                placeholder="Écrivez votre commentaire"
                id="exampleFormControlTextarea1"
                rows="3"
              />
              <Button className="btn-warning btn-ajout"
                //onClick={handleClose, handleReview}
                onClick={handleReviewSubmit}
                >
                Ajouter
              </Button>
            </div>
            <ul className="list-group list-group-flush">
              { displayPlaceData && placeData.reviews.map((review) => {
                if (placeData.reviews) {
                  return (
                    <li className="list-group-item">
                      <Rater
                        rating={review.rate}
                        total={5}
                        interactive={false}
                      />
                      <p>{review.user.firstname}</p>
                      <p>{review.title}</p>
                      <p>{review.commentary}</p>
                    </li>
                  );
                } if (placeData.reviews === undefined) {
                  return (
                    <li>
                      <p>Sois le premier à mettre un commentaire !</p>
                    </li>
                  );
                }
              })}
            </ul>
          </Modal.Body>
          {/* Inutile car il y a la petite croix dans le header */}
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Fermer
            </Button>
          </Modal.Footer> */}
        </Modal>

        {
          allPlaces
          &&
          // latlong
          // &&
        allPlaces.map((place) => (
          <div>
            <Marker
              latitude={place.latitude}
              longitude={place.longitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <OverlayTrigger
                trigger="click"
                placement="top"
                overlay={(
                  <Popover id="popover-basic">
                    <Popover.Title as="h3">{place.name}</Popover.Title>
                    <Popover.Content>
                      {place.adress} <strong>{place.city.name}</strong>
                    </Popover.Content>
                  </Popover>
              )}
              >
                <img
                  onDoubleClick={() => {
                    handleShow(place);
                  }}
                  src="../assets/yellowmarker.png"
                  alt="marker"
                />
              </OverlayTrigger>
            </Marker>

          </div>

        ))
}
      </MapGL>
    </>
  );
};

MapBox.propTypes = {

};

MapBox.defaultProps = {

};


export default MapBox;


// == Export
// export default AutoComplete;
