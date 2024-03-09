import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import CreerCompte from './pages/CreerCompte/CreerCompte';
import HomePage from './pages/HomePage';
import ClientSignUpPage from './pages/CreerCompte/CompteClient/Client';
// import InscriptionPrestataire from './components/CreerCompte/InscriptionPrestataire';
import PrestataireSignUpPage from './pages/CreerCompte/ComptePrestataire/Prestataire';
// import Authentification from './components/Authentification';
import ConnexionPage from './pages/Connexion/Connexion';
import RecherchePrestataire from './components/Accueil/recherche/RecherchePrestataire';
import Agenda from './components/Agenda';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<HomePage />} />
        <Route path='createaccount' element={<CreerCompte />} />
        <Route path='login' element={<ConnexionPage />} />
        {/* <Route path='inscriptionclient2' element={<InscriptionClient />} /> */}
        <Route path='inscriptionclient' element={<ClientSignUpPage />} />
        {/* <Route path='inscriptionPrestataire2' element={<InscriptionPrestataire />} /> */}
        <Route path='inscriptionprestataire' element={<PrestataireSignUpPage />} />
        <Route path='rechercher' element={<RecherchePrestataire />}/>
        <Route path='dialloagenda' element={<Agenda />}/>
      </Routes>
    </>
  );
}

export default App;
