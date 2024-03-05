import React, { useEffect, useState } from 'react'
import axios from 'axios';
import default_profil from '../../../assets/images/default-avatar-profile.png';

function RecherchePrestataire() {
  // const [listRecherche, setListRecherche] = useState([])
  // axios.get("http://localhost:3001/prestataires").then((response) =>{
  //   // console.log(response.data);
  //   setListRecherche(response.data);
  // })
  // useEffect(() => {
  //     axios.get("http://localhost:3001/prestataires").then((response) =>{
  //         // console.log(response.data);
  //         setListRecherche(response.data);
  //     }, [])
  // })
  // return (
  //   <div className='recherche-container'>
  //     <h4>100 résultats</h4>
  //     {listRecherche.map((value, key) => {
  //       return (
  //         <div className="profil-prestataire" key={value.id}>
  //           <div className="profil">
  //             {/* {value.profile_image} */}
  //             <div>
  //               <img src={default_profil} alt='Profil Image'/>
  //             </div>
  //             <div>
  //               <h2>{value.prenom + " " + value.nom}</h2>
  //               <h4>{value.fonction + " at " + value.nom_entreprise}</h4>
  //             </div>
  //           </div>
  //           <div className="description">
  //             {value.description} description
  //           </div>
  //           <div className="btn-rv">
  //             <button>Prendre Rendez-Vous</button>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // )
}

export default RecherchePrestataire;