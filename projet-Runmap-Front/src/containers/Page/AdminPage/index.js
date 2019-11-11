// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import AdminPage from 'src/components/Page/AdminPage';
import { collectUsersData, changeUsersData, deleteUser } from 'src/store/reducer';

// Action Creators

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  usersData: state.usersData,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({

  collectUsersData: () => {
    dispatch(collectUsersData());
  },

  changeUsersData: (value) => {
    dispatch(changeUsersData(value));
  },

  deleteUser: (value) => {
    dispatch(deleteUser(value));
  },

});


// Container
const AdminPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminPage);

// == Export
export default AdminPageContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
