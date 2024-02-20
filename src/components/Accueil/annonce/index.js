import React from 'react'
import './index.scss';
import annonce_image from '../../../assets/images/200_prestaires_image.png';
function Annone() {
  return (
    <div className='annonce-page'>
        <div className='annonce-text-zone'>
            <h1>
                Plus de 200 prestaires qualifiés pour vous 
                accompagner dans vos différents services.
            </h1>
            <input type='button' value="En savoir plus" />
        </div>
        <div className='annonce_images'>
            <img src={annonce_image} alt="Image d'annonce" />
        </div>
    </div>
  )
}
export default Annone;