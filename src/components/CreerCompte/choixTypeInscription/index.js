import React from 'react'
import './index.scss';

function ChoixTypeCompte() {
  return (
    <div className="container-form">
        <div className='choix-compte'>
            <div>
                <input type="button" value="S'inscrire en tant que Client ?" />
            </div>
            <div>
                <input type="button" value="S'inscrire en tant que Prestataire ?" />
            </div>
        </div>
    </div>
  )
}

export default ChoixTypeCompte;