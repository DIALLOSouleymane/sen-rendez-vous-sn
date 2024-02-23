import React from 'react'
import './creerCompte.scss';
import PiedPage from '../../components/Accueil/piedPage';
import NavigationBar from '../../components/NavigationBar';
import Main from '../../components/CreerCompte/main';
import ChoixTypeCompte from '../../components/CreerCompte/choixTypeInscription';


function CreerCompte() {
  return (
    <div>
      <NavigationBar />
      <Main />
      <ChoixTypeCompte />
      <PiedPage />
    </div>
  )
}

export default CreerCompte;