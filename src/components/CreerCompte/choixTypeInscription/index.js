import React from 'react'
import './index.scss';
import { useNavigate } from 'react-router-dom';

function ChoixTypeCompte() {

  const navigate = useNavigate();

  // Function de navigation
  const navigation1 = () => {
    navigate("/inscriptionclient")
  }
  
  const navigation2 = () => {
    navigate("/inscriptionprestataire#test")
  }

  return (
    <div className="container-form">
        <div className='choix-compte'>
            <div id='choisir-type-compte'>
                <input 
                  type="button" 
                  value="S'inscrire en tant que Client ?"
                  onClick={navigation1}
                />
            </div>
            <div>
                <input 
                  type="button" 
                  value="S'inscrire en tant que Prestataire ?"
                  onClick={navigation2}
                />
            </div>
        </div>
    </div>
  )
}

export default ChoixTypeCompte;