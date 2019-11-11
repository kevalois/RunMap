// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import PreInscriptionFormSection from 'src/components/Page/HomePage/PreInscriptionFormSection/';
import SearchFormSection from 'src/components/Page/HomePage/SearchFormSection';
import InscriptionAdSection from 'src/components/Page/HomePage/InscriptionAdSection/';
import './homepage.scss';

// == Composant
const HomePage = ({
  searchFormData,
  setSearchFormData,
}) => (
  <>
    <PreInscriptionFormSection />
    <SearchFormSection
      searchFormData={searchFormData}
      setSearchFormData={setSearchFormData}
    />
    {/* <InscriptionAdSection /> */}

  </>
);

HomePage.propTypes = {
  searchFormData: PropTypes.object.isRequired,
  setSearchFormData: PropTypes.func.isRequired,
};

// == Export
export default HomePage;
