
// - initialState
const initialState = {
  username: '',
  password: '',
  logged: false,
};

// - Actions Types
const SAVE_USER = 'SAVE_USER';

// - Reducer
const reducer = (state = initialState, action ={}) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        username: action.username,
        password: action.password,
        logged: true,
      };
    default:
      return state;
  }
};

// - Actions Creators
export const saveUser = (username, password) => ({
  type: SAVE_USER,
  username,
  password,
});

// - export
export default reducer;
