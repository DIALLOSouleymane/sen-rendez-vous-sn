import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import CreerCompte from './pages/CreerCompte/CreerCompte';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<HomePage />} />
        <Route path='createaccount' element={<CreerCompte />} />
      </Routes>
    </>
  );
}

export default App;
