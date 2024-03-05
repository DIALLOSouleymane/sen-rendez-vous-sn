import React from 'react'
import './creerCompte.scss';
import PiedPage from '../../src/components/Accueil/piedPage';
import Admin1 from 'Admin/dashboard';
import AdminConnexion from 'Admin/entete';
//import ChoixTypeCompte from '../../components/CreerCompte/choixTypeInscription';


function AdminDashboard() {
    
  return (

         <div className="containerForm1">
      <Admin1 />
      <AdminConnexion />
      <PiedPage />
    </div>
  )
}

export default AdminDashboard;