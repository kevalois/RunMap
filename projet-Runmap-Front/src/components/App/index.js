// == Import : npm
import React, { useState } from 'react';


// == Import : local
import AutoComplete from 'src/components/AutoComplete';
import FrontGetJson from 'src/components/FrontGetJson';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Page from 'src/components/Page';
import './app.scss';


// == Composant
const App = ({ logged, user }) => {
  const [searchFormData, setSearchFormData] = useState(
    {
      sport: '',
      place: '',
    },
  );

  return (
    <div id="app">

      <AutoComplete />
      <FrontGetJson />
      <Header
        logged={logged}
        user={user} // Utilisateur inscrit
        loggedAdmin={false} // Compte administrateur => Accès page admin.
      />

      <Page
        searchFormData={searchFormData}
        setSearchFormData={setSearchFormData}
      />
      {/* <Footer /> */}
      <AutoComplete />
      <FrontGetJson />
    </div>
  );
};

// == Export
export default App;
