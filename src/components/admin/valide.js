
import React from 'react';
import './valider.scss';

function Valider({ texte1 = "Valider", texte2="Annuler" }) {
  return (
    <div className='button-container'> 
        <div >
            <button className="Button1" aria-label={texte1}>{texte1}</button>
    
        </div>
        <div>
            <button className="Button2" aria-label={texte2}>{texte2}</button>
    
        </div>
        
    </div>
    
    
  );
}

export default Valider;
