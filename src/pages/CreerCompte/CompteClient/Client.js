import React from 'react'
import './client.scss';
import NavigationBar from '../../../components/NavigationBar';
import Home from '../../../components/Accueil/main';
import PiedPage from '../../../components/Accueil/piedPage';
import InscriptionClient from '../../../components/CreerCompte/InscriptionClient';


function ClientSignUpPage() {
  return (
    <div>
        <NavigationBar />
        <Home />
        <div className="inscription-client">
            <InscriptionClient />
        </div>
        <PiedPage />
    </div>
  )
}

export default ClientSignUpPage;