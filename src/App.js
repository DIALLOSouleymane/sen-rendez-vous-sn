import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Accueil';
import Recherche from './components/Accueil/recherche';
import Annone from './components/Accueil/annonce';
import PiedPage from './components/Accueil/piedPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />} />
      {/* <Route index element={<Home />} /> */}
    </Routes>
    <Home />
    <Recherche />
    <Annone />
    <PiedPage />
    {/* </Route> */}
    {/* </Routes> */}
    </>
  );
}

export default App;
