import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// https://programmingwithmosh.com/react/simple-react-autocomplete-component/
export const Autocomplete = ({
  displaySuggestion,
  suggestions,
  activeSuggestion,
  filteredSuggestions,
  showSuggestions,
  userSearchInput,
  choosenSuggestion,
  selectSuggestion,
  activeSuggestionRemove,
  activeSuggestionAdd,
}) => {
  /* Initial state
  activeSuggestion: 0,
  filteredSuggestions: [],
  showSuggestions: false,
  userInput: "",
    */
  console.log('suggestions :', suggestions);
  const onChange = (event) => {
    // valeur dans l'input
    const userInput = event.currentTarget.value;
    // filtre le contenu de suggestions en fonction de la valeur de l'input
    const varFilteredSuggestions = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    );
    console.log('filteredSuggestions : ', varFilteredSuggestions);

    // éxecution de la fonction
    displaySuggestion(userInput, varFilteredSuggestions);
  };

  // https://programmingwithmosh.com/react/simple-react-autocomplete-component/
  // https://codesandbox.io/s/q8pn97y064?from-embed

  const onClick = (event) => {
    const varChosenSuggestion = event.currentTarget.innerText;
    choosenSuggestion(varChosenSuggestion);
  };

  const onKeyDown = (event) => {
    // en appuyant sur tab ça séléctionne la première énumération
    if (event.keyCode === 9) {
      selectSuggestion(filteredSuggestions[activeSuggestion]);
    }
    else if (event.keyCode === 38) { // 38 = up arrow
      if (activeSuggestion === 0) {
        return;
      }
      activeSuggestionRemove(activeSuggestion - 1);
    }
    else if (event.keyCode === 40) { // 40 = down arrow
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      activeSuggestionAdd(activeSuggestion + 1);
    }
  };

  let suggestionsListComponent = '';
  console.log('showSuggestions : ', showSuggestions);
  console.log('userSearchInput : ', userSearchInput);
  if (showSuggestions && userSearchInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions list-group">
          {filteredSuggestions.map((suggestion, index) => {
            let className;
            if (index === activeSuggestion) {
              className = '';
            }
            return (
              <li className="search-list list-group-item list-group-item-action" key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    }
    else {
      suggestionsListComponent = (
        <div className="no-suggestions" style={{ marginTop: '1em'}}>
          <p className="p-1 mb-2 bg-light text-dark">
            la ville n'a pas de lieu référencé ? <br />
          </p>
          <button type="button" className="btn btn-warning text-dark anchor-style btn-lg">
            <Link to="/ajouter" className="anchor-style" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>ajoute là !</Link>
          </button>
        </div>
      );
    }
  }

  return (
    <>
      <input
        id="exampleFormControlSelect1"
        className="form-control"
        type="search"
        placeholder="ex: Nice"
        aria-label="Search"
        onChange={onChange}
        value={userSearchInput}
        onKeyDown={onKeyDown}
      />
      {suggestionsListComponent}
    </>
  );
};

Autocomplete.propTypes = {

  displaySuggestion: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired,
  activeSuggestion: PropTypes.number.isRequired,
  filteredSuggestions: PropTypes.array.isRequired,
  showSuggestions: PropTypes.bool.isRequired,
  userSearchInput: PropTypes.string,
  choosenSuggestion: PropTypes.func.isRequired,
  selectSuggestion: PropTypes.func.isRequired,
  activeSuggestionRemove: PropTypes.func.isRequired,
  activeSuggestionAdd: PropTypes.func.isRequired,
};

// la valeur du champs de recherche n'est pas obligatoire
// cependant par défaut elle doit être undefined
Autocomplete.defaultProps = {
  userSearchInput: '',
};


export default Autocomplete;


// == Export
// export default AutoComplete;
