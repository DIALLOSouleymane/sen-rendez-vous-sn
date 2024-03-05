
import React, { useState } from 'react';
//import Button from './Button'; 
import './Button.scss';
import './brouillonAdmin.scss';
import Calendar from 'react-calendar';
//import './calendar.js'
import 'react-calendar/dist/Calendar.css';
import './calendar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCalendarAlt, faEnvelope, faClipboard, faCog, faSignOutAlt, faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons'; // Importe les icônes nécessaires
//import Home from './Accueil/main';
import PiedPage from '../Accueil/piedPage';
import prestataires from '../../assets/images/prestataire.png'
import Name from './names.js';
//import './names.scss'
import Time from './time.js'
import Valider from './valide.js'
//import { Link } from 'react-router-dom';
//import Calendar from './calendar';
//<Button onClick={() => console.log('Bouton cliqué !')} className="custom-button">Voir Tout</Button>

function Admin1() { 
 
  return (
    <div className="containerForm">
      <div className="admin"> 

      <h1 className="main-heading">Panneau Prestataire / Tableau de bord</h1>
        <div>
          <div className="bloc">
          <ul>
              <li className="nav-item mb-2">
                <a className="nav-link text-secondary" href="#">
                  <FontAwesomeIcon icon={faChartBar} className="font-weight-bold" /> 
                  <span className="ml-3"> Tableau de bord </span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link text-secondary" href="#">
                  <FontAwesomeIcon icon={faCalendarAlt} className="font-weight-bold" /> 
                  <span className="ml-3"> Agenda </span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link text-secondary" href="#">
                  <FontAwesomeIcon icon={faEnvelope} className="font-weight-bold" /> 
                  <span className="ml-3"> Messages </span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link text-secondary" href="#">
                  <FontAwesomeIcon icon={faClipboard} className="font-weight-bold" /> 
                  <span className="ml-3"> Créer formulaire </span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link text-secondary" href="#">
                  <FontAwesomeIcon icon={faCog} className="font-weight-bold" /> 
                  <span className="ml-3"> Paramètres </span>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a className="nav-link text-secondary" href="#">
                  <FontAwesomeIcon icon={faSignOutAlt} className="font-weight-bold" /> 
                  <span className="ml-3"> Déconnexion </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bloc1"> 
           
            <div className='recherche'> 
             <input type="text" placeholder="Rechercher..." className="search-bar"   />  
             < faSearch />
             <FontAwesomeIcon icon= {faSearch} className="search"  />
             
            </div>
           
            <h1 className="sub-heading">Bonjour. <span className='primary'>M SOOW!!</span></h1>
            <FontAwesomeIcon icon= {faBell} className="fontBell"  />
            <FontAwesomeIcon icon={faUser}  className='user'/>

            <div className='bloc5'>
              <h2>Listes des rendez-vous</h2>
              <div className='Name1'>
                <Name userName= "SM"  key={1}/>
                <h3>Seynabou Mbaw
                  <h5>Dépannage</h5>
                </h3>
              </div>
              <div className='Time1'>
                <Time  time="9h:15min" key={1}/>
                
              </div>
              
              <div className='Name2'>
                <Name userName= "AD" key={2}/>
                <h3>Amy Diouf
                <h5>Assurance</h5>
                </h3>
                  
              </div>
              <div className='Time2'>
                <Time  time="9h:30min" key={1}/>
                
              </div>
              
              <div className='Name3'>
                <Name userName= "DJ" key={2}/>
                <h3>Daouda Jeanne
                <h5>Nettoyage</h5>
                </h3>
              </div>
              <div className='Time3'>
                <Time  time="9h:50min" key={1}/>
                
              </div>
              

    

            </div>
          </div>
          <div className="bloc2">
              <h2>Mes réservations</h2>
              {/* <Link class="nav-link" to="/calendar"> */}
            {/* Calendar  */}
            < Calendar  
            
            
          />
    
            <h1>Demandes de réservations
   
            </h1>

            <div className='demande'>
              <div className='Name1'>
                    <Name userName= "SM"  key={1}/>
                    <h3>Seynabou Mbaw
                      <h5>Dépannage</h5>
                    </h3>
              </div>
                  <div className='Time1'>
                    <Time  time="9h:15min" key={1}/>
                    
                  </div>
                  <div className='valider1'> 
                  <Valider/>
                  </div>
                  
                  <div className='Name2'>
                    <Name userName= "AD" key={2}/>
                    <h3>Amy Diouf
                    <h5>Assurance</h5>
                    </h3>
                      
                  </div>
                  <div className='Time2'>
                    <Time  time="9h:30min" key={1}/>
                    
                  </div>
                  <div className='valider2'> 
                  <Valider />
                  </div>
                  
                  <div className='Name3'>
                    <Name userName= "DJ" key={2}/>
                    <h3>Daouda Jeanne
                    <h5>Nettoyage</h5>
                    </h3>
                  </div>
                  <div className='Time3'>
                    <Time  time="9h:50min" key={1}/>
                    
                  </div>
                  <div className='valider3'> 
                  <Valider />
                  </div>
                
            </div>

         
         
         
          







          


          
          
            <div className="bloc3">
              <h2>Réservations à venir <br /><span>4</span></h2>
            </div>
            <div className="bloc4">
              <h2>Réservations passées <br /> <span>6</span></h2> 
            </div>
            <div className='prestaires'>
              <img src={prestataires} alt="Image" />
            </div>
          </div>
          <PiedPage />
        </div>
      </div>
    </div>
  );
}

export default Admin1;
