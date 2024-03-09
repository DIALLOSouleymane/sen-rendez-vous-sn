import './index.scss';
import { useParams } from 'react-router-dom';
import default_profil from '../../assets/images/default-avatar-profile.png';
import sdley_pp from '../../assets/images/_pp_sdley.png';
import yassine_pp from '../../assets/images/_pp_yassine.jpg';
import mbacke_pp from '../../assets/images/_pp_mbacke.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPersonChalkboard, faQuoteLeft, faQuoteRightAlt } from '@fortawesome/free-solid-svg-icons';

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Agenda from '../Agenda';

function Prestataire() {
    let { id } = useParams();
    const [prestataire, setPrestataire] = useState([]);

    useEffect(() => {
        const fetchPrestataire = async () => {
          try {
            const response = await axios.get(`http://localhost:3001/prestataireId/${id}`);
            setPrestataire(response.data);
            console.log(response.data);
    
          } catch (error) {
            console.error("Erreur de récupération des données : ", error);
          }
        };
    
        fetchPrestataire();
      }, []);

  return (
    <div className='prise-rv-container'>
        <div>
            <Agenda />
        </div>
        <div className="profil-prestataire" 
            key={prestataire.id}
            
            >
            <div className="profil">
              <div>
                {/* 
                    Utilison l'interpolation controlons l'affichage des profils 
                    des différents prestataires :
                */}
                {
                  (prestataire.id === 1) ?
                    <img src={sdley_pp} alt='sdley profil'/> :
                    (prestataire.id === 2) ?
                      <img src={yassine_pp} alt='Yassine Profil'/> : 
                      (prestataire.id === 3) ?
                      <img src={mbacke_pp} alt='M Mbacke Profil'/> :
                      <img src={default_profil} alt='Profil'/>
                }
              </div>
              <div>
                <h2>{prestataire.prenom + " " + prestataire.nom}</h2>
                <h4>{prestataire.fonction + " at " + prestataire.nom_entreprise}</h4>
              </div>
            </div>
            <div className="lieu">
              <FontAwesomeIcon 
                icon={faMapMarkerAlt} 
                className='my-favorite-icone'
              /> 
              {prestataire.lieu}
            </div>
            <div className="description">
              <p>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className='my-favorite-icone'
                />
                {prestataire.description}
                <FontAwesomeIcon
                  icon={faQuoteRightAlt}
                  className='my-favorite-icone'
                />
              </p>
            </div>
            <p>
                <FontAwesomeIcon
                  icon={faPersonChalkboard}
                  className='my-favorite-icone'
                />
                  <i>Bienvenue sur mon agenda !</i>
                <FontAwesomeIcon
                  icon={faPersonChalkboard}
                  className='my-favorite-icone'
                />
            </p>

        </div>
    </div>
  );
}

export default Prestataire;