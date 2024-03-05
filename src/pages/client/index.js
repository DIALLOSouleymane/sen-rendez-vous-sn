import React, { useState } from 'react';
//import Button from './Button'; 
import './indexClient.scss';

import Calendar from 'react-calendar';
//import './calendar.js'
import 'react-calendar/dist/Calendar.css';
import './calendar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCalendarAlt, faEnvelope, faClipboard, faCog, faSignOutAlt, faSearch, faBell, faUser,faChevronDown} from '@fortawesome/free-solid-svg-icons'; // Importe les icônes nécessaires
//import Home from './Accueil/main';
import PiedPage from '../../components/Accueil/piedPage';
import dashboard_client from '../../assets/images/dashboard_client.jpeg'
import Name from '../../components/admin/names.js';
//import './names.scss'
import Time from '../../components/admin/time.js';

import Consulter from './consulter.js'



function Client() { 
 
  return (
    <div className="containerForm">
      <div className="client"> 

      <h1 className="main-heading">Panneau Client / Tableau de bord</h1>
        <div>
          <div className="bloc">
          </div>
          <div className="bloc1"> 
           
            <div className='recherche'> 
             <input type="text" placeholder="Rechercher..." className="search-bar"   />  
             < faSearch />
             <FontAwesomeIcon icon= {faSearch} className="search"  />
             
            </div>
           
            <h1 className="sub-heading"> <span className='primary'>Mouhamed NDIAYE</span></h1>
            <div className='font'>
              <FontAwesomeIcon icon= {faBell} className="fontBell"  />
              <div className="bloc3">
                <FontAwesomeIcon icon={faUser}  className='user'/>
                <div className="profil">
                <h2>MN </h2>
                </div>
                <FontAwesomeIcon icon= {faChevronDown} className='down' />
            </div>
             
            </div>
            
            <div className='bloc5'>
              <h2>Prochains rendez-vous</h2>
              <div className='Name1'>
                <Name userName= "SM"  key={1}/>
                <h3>Salon Michelle
                  <h5>Coiffure</h5>
                </h3>
              </div>
              <div className='Time1'>
                <Time  time="8H:30min" key={1}/>
                
              </div>
              
              <div className='Name2'>
                <Name userName= "CD" key={2}/>
                <h3>Coach Doudou
                <h5>Fitness</h5>
                </h3>
                  
              </div>
              <div className='Time2'>
                <Time  time="9H:30 min" key={1}/>
                
              </div>
              
              <div className='Name3'>
                <Name userName= "DJ" key={2}/>
                <h3>Daouda Jeanne
                <h5>Avocat</h5>
                </h3>
              </div>
              <div className='Time3'>
                <Time  time="11H:15 min" key={1}/>
                
              </div>
              

    

            </div>
          </div>
          <div className="bloc2">
             
              {/* <Link class="nav-link" to="/calendar"> */}
            {/* Calendar  */}
            < Calendar  
        
          />
          <Consulter />
           
          <div className='client'>
              <img src={dashboard_client} alt="Image" />
            </div>    
          </div>
          <PiedPage />
        </div>
      </div>
    </div>
  );
}

export default Client;

