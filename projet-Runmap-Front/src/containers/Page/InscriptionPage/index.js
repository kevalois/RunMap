// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import InscriptionPage from 'src/components/Page/InscriptionPage';
import { changeInscriptionFormValue, submitInscriptionForm, changeDisplayPasswordErrorMessage } from 'src/store/reducer';

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
});

// Container
const InscriptionPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InscriptionPage);

// == Export
export default InscriptionPageContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
