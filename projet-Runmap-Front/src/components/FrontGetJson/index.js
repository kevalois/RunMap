// fichier de test pour faire des requêtes à l'api symfony

// == Import : npm
import React from 'react';
import axios from 'axios';

// == Import : local

// == Composant
class FrontGetJson extends React.Component {
  state = {
    inputSearch: ' valeur initial',
  }

  changeValue = (inputSearch) => {
    this.setState({
      inputSearch,
    });
  };

  validateSearch = () => {
    const { inputSearch } = this.state;
    console.log('valeur soumise : ', inputSearch);
    // https://api.github.com/search/repositories?q=${inputSearch}  pour se connecter à l'api de git pour tester...

    // route home de Brice : http://brice-ouaali.vpnuser.oclock.io/projet-Runmap/public/
    // route home de Julien : http://julien-pillet.vpnuser.oclock.io/RunBack/public
    // route search (préciser l'id de la ville): http://brice-ouaali.vpnuser.oclock.io/projet-Runmap/public/search/1
    // route place : http://brice-ouaali.vpnuser.oclock.io/projet-Runmap/public/place/1
    /*
     * CHANGE LE LIEN HTTP CI-DESSOUS. C'est votre route!
     */

    axios.post('http://julien-pillet.vpnuser.lan/public/register', {
      form: {
        firstName: 'Fred',
        lastName: 'Flintstone',
      },
    }).then((response) => {
      console.log('réponse de mr API : ', response);
      // eslint-disable-next-line arrow-body-style
    })
      .catch((error) => {
        console.log('Apparement ça marche pas');
      })
      .finally(() => {
      });
  };


  render() {
    const handleChange = (event) => {
      const { value } = event.target;
      this.changeValue(value);
      console.log('ce que tu es en train d\'écrire dans l\'input : ', value)
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      this.validateSearch();
    };

    // console.log('valeur de inputSearch dans le state : ', this.state.inputSearch)

    return (
      <>
        {/*
          <form onSubmit={handleSubmit}>
          <input onChange={handleChange} placeholder="tappe entrée dans l'input" />
        </form>
        */}
      </>
    );
  }
}

// == Export
export default FrontGetJson;
