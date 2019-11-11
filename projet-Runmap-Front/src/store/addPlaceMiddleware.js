import {
  SUBMIT_ADD_PLACE_FORM,
  changeRegisterMessage,
} from 'src/store/reducer';
import axios from 'axios';

import { baseUri, createPlace } from 'src/store/vars_route';

const addPLaceMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le addPLaceMiddleware, et je laisse passer cette action: ', action);
  next(action);

  // eslint-disable-next-line default-case
  switch (action.type) {
    case SUBMIT_ADD_PLACE_FORM: {
      const state = store.getState();

      const addPlaceFormData = {
        city: {
          name: state.cityName,
          postalcode: Number(state.postalCode),
        },
        place: {
          name: state.placeName,
          adress: state.adress,
          schedule: state.schedule,
          complement_info: state.additionalInfo,
        },
      };


      // test
      // addPlaceFormData = {
      //   city: {
      //     name: 'Villeneuve-La-Garenne',
      //     postalcode: 92390,
      //   },
      //   place: {
      //     name: 'Stade Gaston Bouillant',
      //     adress: 'Avenue Pierre de Coubertin',
      //     schedule: 'de 9h à 12h',
      //     complement_info: 'pas d\'info complementaire',
      //   },
      // };

      console.log('L\'objet qui est envoyé dans la requête :', addPlaceFormData);

      const { adress } = addPlaceFormData.place;
      const city = addPlaceFormData.city.name;

      // requete pour récuperer la longitude et la latitude du lieu.
      axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${adress} ${city}.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1572711922131&autocomplete=false&types=place%2Caddress&limit=1`)
        .then((geocoderResponse) => {
          // console.log('COORDONNEE : ', response.data.features[0].center);
          const latitude = geocoderResponse.data.features[0].center[1];
          const longitude = geocoderResponse.data.features[0].center[0];

          // Proutard(latitude, longitude);
          console.log('longlat : ', latitude, longitude);

          addPlaceFormData.place.latitude = latitude;
          addPlaceFormData.place.longitude = longitude;

          console.log(addPlaceFormData);

          // on envoie la requete pour créer le lieu.
          axios.post(`${baseUri}${createPlace}`, {
            ...addPlaceFormData,
          })
            .then((response) => {
              console.log('réponse de mr API : ', response.data);
              if (typeof response.data === 'string') {
                const registerMessage = 'nouveau lieu créé';
                const actionRegisterMessage = changeRegisterMessage(registerMessage);
                store.dispatch(actionRegisterMessage);
              }
              // si la réponse attendu correspond
              // alors on confirme la création du compte à l'utilisateur
              // if (typeof response.data === 'string') {
              //   const registerMessage = 'votre compte est créé';
              //   const actionRegisterMessage = changeRegisterMessage(registerMessage);
              //   store.dispatch(actionRegisterMessage);
              // }
            })
            .catch((error) => {
              console.log('Apparement ça marche pas', error.response);
              // console.log('contrainte(s) sur le formulaire : ', error.response.data);
    
              // let errorMessageToDisplay = '';
              // // on verifie le type de la réponse reçu
              // if (typeof error.response.data === 'object') {
              //   if (typeof error.response.data.email === 'string') {
              //     // message à afficher
              //     errorMessageToDisplay = 'Cet adresse e-mail est déjà utilisée';
              //   }
              // }
              // const actionGetErrorMessage = changeRegisterErrorMessage(errorMessageToDisplay);
              // store.dispatch(actionGetErrorMessage);
            })
            .finally(() => {
            });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          // console.log('GeoLocateArray finally : ', geoLocateArray);

          // console.log('GeoLocateArray marche encore ? : ', geoLocateArray);
          // longLat(geoLocateArray)
        });



      // envoi du contenu du formulaire à l'api symfony
      // cf doc axios sur son fonctionnement https://github.com/axios/axios
      
    }
  }
};

export default addPLaceMiddleware;
