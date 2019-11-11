// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import AddPlacePage from 'src/components/Page/AddPlacePage';
import {
  changeInscriptionFormValue,
  submitInscriptionForm,
  changeDisplayPasswordErrorMessage,
  changeAddPlaceFormValue,
  submitAddPlaceForm,
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
  inscriptionFormData: state,
  errorMessageAlert: state.errorMessage,
  validationMessage: state.validationMessage,
  displayPasswordErrorMessage: state.displayPasswordErrorMessage,

  addPlaceFormData: {
    cityName: state.cityName,
    postalCode: state.postalCode,
    placeName: state.placeName,
    adress: state.adress,
    schedule: state.schedule,
    additionalInfo: state.additionalInfo,
  },
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInscriptionFormValue: (value, name) => {
    dispatch(changeInscriptionFormValue(value, name));
  },

  submitInscriptionForm: () => {
    dispatch(submitInscriptionForm());
  },

  changeDisplayPasswordErrorMessage: (value) => {
    dispatch(changeDisplayPasswordErrorMessage(value));
  },

  changeAddPlaceFormValue: (value, name) => {
    dispatch(changeAddPlaceFormValue(value, name));
  },

  submitAddPlaceForm: () => {
    dispatch(submitAddPlaceForm());
  },


  
});

// Container
const AddPlacePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPlacePage);

// == Export
export default AddPlacePageContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
