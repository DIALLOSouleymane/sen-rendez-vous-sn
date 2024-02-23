import React from 'react'
import Recherche from '../components/Accueil/recherche';
import Annone from '../components/Accueil/annonce';
import PiedPage from '../components/Accueil/piedPage';
import NavigationBar from '../components/NavigationBar';
import Home from '../components/Accueil/main';

function HomePage() {
  return (
    <div>
      <NavigationBar />
      <Home />
      <Recherche />
      <Annone />
      <PiedPage />
    </div>
  )
}

export default HomePage;