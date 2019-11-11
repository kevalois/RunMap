import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from 'src/components/Page/HomePage/SearchFormSection/SearchForm/';
import ArrowIcon from 'src/components/Page/HomePage/SearchFormSection/ArrowIcon/';

// == Import : local
import './SearchFormSection.scss';

// composant
const SearchFormSection = ({ searchFormData, setSearchFormData }) => (

  <div className="search-main">
    <div className="container container-search">
      <div className="title-search">
        <h2>C'est aussi simple que ça ...</h2>
      </div>
      <SearchForm searchFormData={searchFormData} setSearchFormData={setSearchFormData} />
    </div>
    <ArrowIcon />
  </div>

);

SearchFormSection.propTypes = {
  searchFormData: PropTypes.object.isRequired,
  setSearchFormData: PropTypes.func.isRequired,
};

// == Export
export default SearchFormSection;
