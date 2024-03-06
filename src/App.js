import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import CreerCompte from './pages/CreerCompte/CreerCompte';
import HomePage from './pages/HomePage';
import Prest from './components/admin/BrouillonAdmin'; 
//import client from './components/client/index';
// import client from './pages/client/index';
import Client from './pages/client';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<HomePage />} />
        <Route path='createaccount' element={<CreerCompte />} />
        <Route path='prestataire' element={<Prest />} />
        <Route path='Client' element={< Client/>} /> 
      </Routes>
    </>
  );
}

export default App;
