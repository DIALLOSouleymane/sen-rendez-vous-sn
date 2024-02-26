import React from 'react'
import './connexion.scss';
import NavigationBar from '../../components/NavigationBar';
import Connexion from '../../components/Authentification';
import PiedPage from '../../components/Accueil/piedPage';


function ConnexionPage() {
  return (
    <div>
        <NavigationBar />
        <div className="connexion-page">
            <Connexion />
        </div>
        <PiedPage />
    </div>
  )
}

export default ConnexionPage;