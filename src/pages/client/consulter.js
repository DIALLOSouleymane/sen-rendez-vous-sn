import React from 'react';
import './consulter.scss';

function Consulter({ texte1 = "Voir mes rendez-vous" }) {
  return (
    
    <div className='button-containerClient'> 
    <div >
        <button className="ButtonC" aria-label={texte1}>{texte1}</button>

    </div>
   
    
</div>
        
    
    
  );
}

export default Consulter;