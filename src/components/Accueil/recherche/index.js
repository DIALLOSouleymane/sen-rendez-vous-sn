import React from 'react'
import './index.scss';
const Recherche = () => {
  return (
    <div className='recherche-form'>
      <h2>Trouver un Prestaire</h2>
      <form className='flex-container'>
        <div>
          <input type='text' placeholder='Nom : ' />
        </div>
        <div>
        <input type='text' placeholder='Spécialité ou service offert : ' />
        </div>
        <div>
        <input type='Button' value="Rechercher" />
        </div>
      </form>
    </div>
  )
}

export default Recherche