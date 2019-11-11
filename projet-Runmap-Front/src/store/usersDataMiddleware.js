import {
  COLLECT_USERS_DATA,
  DELETE_USER,
  changeUsersData,
} from 'src/store/reducer';
import axios from 'axios';
import { baseUri, allUsers, deleteUser } from 'src/store/vars_route';

const usersDataMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le usersDataMiddleware, et je laisse passer cette action: ', action);
  next(action);

  // eslint-disable-next-line default-case
  switch (action.type) {
    case COLLECT_USERS_DATA: {
      axios.get(`${baseUri}${allUsers}`)
        .then((response) => {

          console.log('réponse de mr API : ', response.data);
          store.dispatch(changeUsersData(response.data));
        })
        .catch((error) => {
        })
        .finally(() => {
        });
    }
    break;
    case DELETE_USER: {
      const state = store.getState();
      const id = state.userId;
      axios.post(`${baseUri}${deleteUser}${id}`)
        .then((response) => {
          console.log('réponse de mr API : ', response.data);
        })
        .catch((error) => {
          console.log(error.response);
        })
        .finally(() => {
        });
    }
  }
};

export default usersDataMiddleware;
