// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ContactPage from 'src/components/Page/ContactPage';
import {
  changeContactFormValue,
  submitContactForm,
  SuccessSendMessage,
  changeSuccessMessage,
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
  contactFirstname: state.contactFirstname,
  contactLastname: state.contactLastname,
  contactEmail: state.contactEmail,
  contactSubject: state.contactSubject,
  contactBody: state.contactBody,
  successMessage: state.successMessage,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({

  changeContactFormValue: (value, name) => {
    dispatch(changeContactFormValue(value, name));
  },

  submitContactForm: () => {
    dispatch(submitContactForm());
  },

  SuccessSendMessage: () => {
    dispatch(SuccessSendMessage());
  },

  changeSuccessMessage: () => {
    dispatch(changeSuccessMessage());
  }
});


// Container
const ContactPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactPage);

// == Export
export default ContactPageContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
