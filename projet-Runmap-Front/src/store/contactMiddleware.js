import {
  SUBMIT_CONTACT_FORM_VALUE,
  SuccessSendMessage,
} from 'src/store/reducer';
import axios from 'axios';

import { baseUri, contactRoute } from 'src/store/vars_route';

const contactMiddleware = (store) => (next) => (action) => {
  // console.log('Je suis le contactMiddleware, et je laisse passer cette action: ', action);
  next(action);

  // eslint-disable-next-line default-case
  switch (action.type) {
    case SUBMIT_CONTACT_FORM_VALUE: {
      const state = store.getState();

      const contactFormData = {
        firstname: state.contactFirstname,
        lastname: state.lastname,
        email: state.contactEmail,
        subject: state.contactSubject,
        body: state.contactBody,
      };
      console.log('L\'objet qui est envoyé dans la requête ', contactFormData);

      // envoi du contenu du formulaire à l'api symfony
      // cf doc axios sur son fonctionnement https://github.com/axios/axios
      axios.post(`${baseUri}${contactRoute}`, {
        ...contactFormData,
      })
        .then((response) => {
          console.log('réponse de mr API : ', response.data);

          // si la réponse attendu correspond
          // alors on confirme la création du compte à l'utilisateur
          if (typeof response.data === 'string') {
            // const successMessage = 'votre message est envoyé';
            store.dispatch(SuccessSendMessage());
          }
        })
        .catch((error) => {
          console.log('Apparement ça marche pas', error.response);
          // console.log('contrainte(s) sur le formulaire : ', error.response.data);

          let errorMessageToDisplay = '';
          // on verifie le type de la réponse reçu
          if (typeof error.response.data === 'object') {
            if (typeof error.response.data.email === 'string') {
              // message à afficher
              // errorMessageToDisplay = 'Cet adresse e-mail est déjà utilisée';
            }
          }
          // const actionGetErrorMessage = changeRegisterErrorMessage(errorMessageToDisplay);
          // store.dispatch(actionGetErrorMessage);
        })
        .finally(() => {
        });
    }
  }
};

export default contactMiddleware;
