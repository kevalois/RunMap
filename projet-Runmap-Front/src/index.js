// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// == FontAwesome > 1/ Importer la librairie,
import { library } from '@fortawesome/fontawesome-svg-core';
// == FontAwesome > 2/ Importer les icons nécéssaire,
import {
  faCog,
  faComment,
  faClock,
  faAngleDoubleDown,
  faBirthdayCake,
  faVenusMars,
  faMapMarkedAlt,
  faInfoCircle,
  faRunning,
  faUser,
  faSearchLocation,
  faMapMarkerAlt,
  faUserCog,
} from '@fortawesome/free-solid-svg-icons';


// == Import : local
import App from 'src/containers/App';
import store from 'src/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';

// == FontAwesome > 3/ Exporter pour utilisation dans tout le projet.
library.add(
  faCog,
  faComment,
  faClock,
  faAngleDoubleDown,
  faBirthdayCake,
  faVenusMars,
  faMapMarkedAlt,
  faInfoCircle,
  faRunning,
  faUser,
  faSearchLocation,
  faMapMarkerAlt,
  faUserCog,
);

// == Render
const rootComponent = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// Le rendu de React => DOM
render(rootComponent, document.getElementById('root'));
