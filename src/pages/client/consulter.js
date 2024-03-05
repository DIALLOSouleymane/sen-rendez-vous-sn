import React from 'react';
import './consulter.scss';

function Consulter({ texte1 = "Voir mes rendez-vous" }) {
  return (
    
    <div className='button-container'> 
    <div >
        <button className="Button1" aria-label={texte1}>{texte1}</button>

    </div>
   
    
</div>
        
    
    
  );
}

export default Consulter;