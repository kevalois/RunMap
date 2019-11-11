import {
  SUBMIT_SIGNIN_FORM,
  changeUser,
  loggedSuccess,
} from 'src/store/reducer';
import axios from 'axios';
import { baseUri, signInRoute } from 'src/store/vars_route';

const authMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le authMiddleware, et je laisse passer cette action: ', action);
  next(action);

  // eslint-disable-next-line default-case
  switch (action.type) {
    case SUBMIT_SIGNIN_FORM: {
      const state = store.getState();
      const email = state.signInEmail;
      const password = state.signInPassword;
      axios.post(`${baseUri}${signInRoute}`, {
        email,
        password,
        username: 'jean@gmail.com',
      },
      // {
      //   headers: {
      //     Authorization: ' Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NzI5NDM2MDcsImV4cCI6MTU3Mjk0NzIwNywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiamVhbmplYW5AZ21haWwuY29tIn0.I8CyuzXY2lEHl4DdkWvow5qxy3teW-ozGQU1CnqWEGapZMV1r8zMCVlkA3h47lHbYNVYXRYyIR-nFVDgeqv-61XjMpAeHUD2cOThD0m6uhrnqrop10g_QrozO7doBe66eMGdtYQFCKwW4Ua45A0YbU6XaL5Qiv0f3oZg0qkkkm1RCsjW_obdqNlN7b1vErM4rtgWuq8wRkXkdpZbZLM7lv-XcCg04VrnoSb9Eq1fLg17748XgehaMy0eR1IAOpeTDI0lfZwoy5j1awJeXZVBcjSvBCMIRIc6rj3rH3juRaCy2fciewiI06jbtxvMzRsJLlpSZBnCmrOAsUK0Wdry8QBMtawkRDBkUpXPkm5N8hKUEikBI-PSNpTWQbmb6gyQKD8kdoWPZqydQfrzuAtGTwb-sS6M71-bHismYrbZgm8GFuz-Xpss6TBMlZGbnYUnMGau-MzhZ9B1EsnXYZz3-Zn-xX1rJJuRrbLlmOQfKshLosFqhcbm9HgcAgg6khyd1AmSg6QvkXygDNWokszO9zjxVhnFNG_G7DBgdvWT6ux9ei7Uf8NlnSk8F81JIKSTRjbi6FfVBxj-Zc9a6vfy6IoE3p6bpJkPjIPOr_GKfA343wPdWJ8G6rv5ARhs64IkE8_5ysF-Qqa_2LHBLQ3chrhnbF36w4DCW5zmV9ChxoM'
      //   },
      // }
      )
        .then((response) => {
          console.log('réponse de mr API : ', response.data);

          if (typeof response.data === 'object') {
            store.dispatch(changeUser(response.data))
            store.dispatch(loggedSuccess())
          }
        })
        .catch((error) => {
          console.log(error.response);
        })
        .finally(() => {
        });
    }
  }
};

export default authMiddleware;
