// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ModalHeader from 'src/components/Header/ModalHeader';
import {
  changeSignInFormValue,
  submitSignInForm,
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
  signInEmail: state.signInEmail,
  signInPassword: state.signInPassword,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
 
  changeSignInFormValue: (value, name) => {
    dispatch(changeSignInFormValue(value, name));
  },

  submitSignInForm: () => {
    dispatch(submitSignInForm());
  },
});

// Container
const ModalHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalHeader);

// == Export
export default ModalHeaderContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
