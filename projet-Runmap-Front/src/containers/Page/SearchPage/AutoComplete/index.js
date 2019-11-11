// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import AutoComplete from 'src/components/Page/SearchPage/AutoComplete';
import {
  displaySuggestion,
  choosenSuggestion,
  selectSuggestion,
  activeSuggestionRemove,
  activeSuggestionAdd,
  collectCities,
} from 'src/store/reducer';

// Action Creators

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  searchValue: state.searchValue,
  suggestions: state.suggestions,
  activeSuggestion: state.activeSuggestion,
  filteredSuggestions: state.filteredSuggestions,
  showSuggestions: state.showSuggestions,
  userSearchInput: state.userSearchInput,

});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  displaySuggestion: (userInput, filteredSuggestions) => {
    dispatch(displaySuggestion(userInput, filteredSuggestions));
  },

  choosenSuggestion: (suggestion) => {
    dispatch(choosenSuggestion(suggestion));
  },
  selectSuggestion: (value) => {
    dispatch(selectSuggestion(value));
  },

  activeSuggestionRemove: (value) => {
    dispatch(activeSuggestionRemove(value));
  },

  activeSuggestionAdd: (value) => {
    dispatch(activeSuggestionAdd(value));
  },
  collectCities: () => {
    dispatch(collectCities());
  },

});

// Container
const AutoCompleteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AutoComplete);

// == Export
export default AutoCompleteContainer;
