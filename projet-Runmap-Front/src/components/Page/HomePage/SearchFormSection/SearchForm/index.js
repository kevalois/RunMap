import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// == Import : local

import './SearchForm.scss';

// composant
// const SearchForm = ({ searchFormData, setSearchFormData }) => {
const SearchForm = ({ searchFormData, setSearchFormData }) => {
  // console.log(searchFormData.sport);
  // console.log(searchFormData.place);
  return (
    <div className="form-search">
      {/* label,input pour le choix du sport */}
      
      {/*
      <label htmlFor="sport-select">
        sport
      */}
      <select
        className="custom-select"
        onChange={(event) => setSearchFormData({
          ...searchFormData,
          sport: event.target.value,
        })}
        name="sport"
        id="sport-select"
      >
        <option value="choisis ton sport">Choix du sport</option>
        <option value="athlétisme">Athlétisme</option>
        <option value="boxe">Boxe</option>
      </select>
      {/*
      </label>
      */}

      {/* label,input pour le choix de la ville */}

      {/*
      <label htmlFor="place-select">
        ou
        <select
          onChange={(event) => setSearchFormData({
            ...searchFormData,
            place: event.target.value,
          })}
          name="place"
          id="place-select"
        >
          <option value="choisis ta ville">choisis ta ville</option>
          <option value="paris">paris</option>
          <option value="lille">lille</option>
        </select>
      </label>
      */}
      
      {/* boutton qui emmène vers la page de résultat */}
      <button
        type="button"
        className="search-button"
      >
        <Link to="/search">Rechercher</Link>
      </button>

    </div>
  )
}

SearchForm.propTypes = {
  searchFormData: PropTypes.object.isRequired,
  setSearchFormData: PropTypes.func.isRequired,
};

// == Export
export default SearchForm;
