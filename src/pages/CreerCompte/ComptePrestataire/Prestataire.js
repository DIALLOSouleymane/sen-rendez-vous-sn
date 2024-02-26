import React from 'react'
import './prestataire.scss';
import NavigationBar from '../../../components/NavigationBar';
import Home from '../../../components/Accueil/main';
import PiedPage from '../../../components/Accueil/piedPage';
import InscriptionPrestataire from '../../../components/CreerCompte/InscriptionPrestataire';


function PrestataireSignUpPage() {
  return (
    <div>
        <NavigationBar />
        <Home />
        <div className="inscription-prestataire">
            <InscriptionPrestataire />
        </div>
        <PiedPage />
    </div>
  )
}

export default PrestataireSignUpPage;