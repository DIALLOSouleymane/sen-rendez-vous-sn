import React, { useState } from 'react';
//import Button from './Button'; 
import './indexClient.scss';

import Calendar from 'react-calendar';
//import './calendar.js'
import 'react-calendar/dist/Calendar.css';
import './calendar1.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCalendarAlt, faEnvelope, faClipboard, faCog, faSignOutAlt, faSearch, faBell, faUser,faChevronDown} from '@fortawesome/free-solid-svg-icons'; // Importe les icônes nécessaires
//import Home from './Accueil/main';
import PiedPage from '../../components/Accueil/piedPage';
import client from '../../assets/images/client.png'
import Name from '../../components/admin/names.js';
//import './names.scss'
import TimeC from './TimeC.js';

import Consulter from './consulter.js'



function Client() { 
 
  return (
    <div className="containerFormC">
      <div className="client"> 

        <h1 className="main-headingC">Panneau Client / Tableau de bord</h1>
        <div>
          <div className="blocC">
          </div>
          <div className="bloc1C"> 
           
            <div className='rechercheC'> 
             <input type="text" placeholder="Rechercher..." className="search-barC"   />  
             < faSearch />
             <FontAwesomeIcon icon= {faSearch} className="searchC"  />
             
            </div>
           
            <h1 className="sub-headingC"> <span className='primaryC'>Mouhamed NDIAYE</span></h1>
            <div className='fontC'>
            <a className="nav-link text-secondary" href="#"><FontAwesomeIcon icon= {faBell} className="fontBellC"  />
            </a>
              
              <div className="bloc3">
              <a className="nav-link text-secondary" href="#"><FontAwesomeIcon icon={faUser}  className='userC'/></a>
                <div className="profil">
                <h2>MN </h2>
                </div>
                <a className="nav-link text-secondary" href="#"><FontAwesomeIcon icon= {faChevronDown} className='down' /></a>
            </div>
             
            </div>
            
            <div className='bloc5C'>
              <h2>Prochains rendez-vous</h2>
              <div className='Name1C'>
                <Name userName= "SM"  key={1}/>
                <h3>Salon Michelle
                  <h5>Coiffure</h5>
                </h3>
              </div>
              <div className='Time1C'>
                <TimeC  time="Mercredi 14 Septembre   11H : 15 min" key={1}/>
                
              </div>
              
              <div className='Name2C'>
                <Name userName= "CD" key={2}/>
                <h3>Coach Doudou
                <h5>Fitness</h5>
                </h3>
                  
              </div>
              <div className='Time2C'>
                <TimeC  time="9H:30 min" key={1}/>
                
              </div>
              
              <div className='Name3C'>
                <Name userName= "DJ" key={2}/>
                <h3>Daouda Jeanne
                <h5>Avocat</h5>
                </h3>
              </div>
              <div className='Time3C'>
                <TimeC  time="11H:15 min" key={1}/>
                
              </div>
              

    

            </div>
          </div>
          <div className="bloc2C">
             
              {/* <Link class="nav-link" to="/calendar"> */}
            {/* Calendar  */}
            < Calendar className="my-custom-calendar" 
        
            />
            <Consulter />
           
            <div className='client'>
                <img src={client} alt="Image" />
            </div>    
          </div>
          <PiedPage />
        </div>
      </div>
    </div>
  );
}

export default Client;

