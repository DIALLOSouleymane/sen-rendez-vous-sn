import React, { useEffect, useState } from 'react'
import './RecherchePrestataire.scss';
import axios from 'axios';
import default_profil from '../../../assets/images/default-avatar-profile.png';
import sdley_pp from '../../../assets/images/_pp_sdley.png';
import yassine_pp from '../../../assets/images/_pp_yassine.jpg';
import mbacke_pp from '../../../assets/images/_pp_mbacke.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faQuoteLeft, faQuoteRightAlt } from '@fortawesome/free-solid-svg-icons';



const RecherchePrestataire = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const name = "souleymane";
      const fonction = "";
      try {
        const response = await axios.get(`http://localhost:3001/search?name=${name}&fonction=${fonction}`);
        setData(response.data);
        // console.log(response.data);

      } catch (error) {
        console.error("Erreur de récupération des données : ", error);
      }
    };

    fetchData();
  }, []);

  return (
    // Mettre le search bar au dessus des résultats
    <div className='recherche-container'>
      {
        (!data.length) ? 
          <h4 className='recherche-result-title'>Aucun résultat ne correspond à votre recherche !</h4> : 
          (data.length === 1) ?
            <h4 className='recherche-result-title'>Un seul profil correspond à votre recherche : </h4> :
              <h4 className='recherche-result-title'>
                {data.length} résultat(s) correspondent à vos recherches :
              </h4>
      }
      {/* <h4 className='recherche-result-title'>{data.length} résultat(s)</h4> */}
      {data.map((value, key) => {
        return (
          <div className="profil-prestataire" key={value.id}>
            <div className="profil">
              <div>
                {/* 
                    Utilison l'interpolation controlons l'affichage des profils 
                    des différents prestataires :
                */}
                {
                  (value.id === 1) ?
                    <img src={sdley_pp} alt='sdley profil'/> :
                    (value.id === 2) ?
                      <img src={yassine_pp} alt='Yassine Profil'/> : 
                      (value.id === 3) ?
                      <img src={mbacke_pp} alt='M Mbacke Profil'/> :
                      <img src={default_profil} alt='Profil'/>
                }
              </div>
              <div>
                <h2>{value.prenom + " " + value.nom}</h2>
                <h4>{value.fonction + " at " + value.nom_entreprise}</h4>
              </div>
            </div>
            <div className="lieu">
              <FontAwesomeIcon 
                icon={faMapMarkerAlt} 
                className='my-favorite-icone'
              /> 
              {value.lieu}
            </div>
            <div className="description">
              <p>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className='my-favorite-icone'
                />
                {value.description}
                <FontAwesomeIcon
                  icon={faQuoteRightAlt}
                  className='my-favorite-icone'
                />
              </p>
            </div>
            <div className="btn-rv-container">
              <button >Prendre Rendez-Vous</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// export default SearchComponent;
/*
function RecherchePrestataire() {
  const [listRecherche, setListRecherche] = useState([])
  axios.get("http://localhost:3001/search").then((response) =>{
    console.log(response.data);
    setListRecherche(response.data);
  })
  // useEffect(() => {
  //     axios.get("http://localhost:3001/search").then((response) =>{
  //         // console.log(response.data);
  //         setListRecherche(response.data);
  //     }, [])
  // })
  // useEffect(() => {
  //     // axios.get("http://localhost:3001/search").then((response) =>{
  //     //     // console.log(response.data);
  //     //     setListRecherche(response.data);
  //     // }
  //   setListRecherche(response.data);
  // }, []);

  return (
    <div className='recherche-container'>
      <h4>100 résultats</h4>
      {listRecherche.map((value, key) => {
        return (
          <div className="profil-prestataire" key={value.id}>
            <div className="profil">
              // { {value.profile_image} }
              <div>
                <img src={default_profil} alt='Profil Image'/>
              </div>
              <div>
                <h2>{value.prenom + " " + value.nom}</h2>
                <h4>{value.fonction + " at " + value.nom_entreprise}</h4>
              </div>
            </div>
            <div className="description">
              {value.description} description
            </div>
            <div className="btn-rv">
              <button>Prendre Rendez-Vous</button>
            </div>
          </div>
        );
      })}
    </div>
  )
}

*/

export default RecherchePrestataire;