import React from 'react'
import './index.scss';

function InscriptionPrestataire() {
  return (
    <div className='inscription-container'>
        <h2>S'inscrire en tant que Prestataire</h2>
        <div className="signUp-form">
            <div className='flex-item'>
                <label htmlFor="name">Prénom(s)</label><br />
                <input type="text" name="" id="name" placeholder='Entrer votre prénom' />
            </div>
            <div className="flex-item">
                <label htmlFor="last-name">Nom</label><br />
                <input type="text" name="" id="last-name" placeholder='Entrer votre nom' />
            </div>
            
            <div className="flex-item">
                <label htmlFor="mail">Email</label><br />
                <input type="text" name="" id="mail" placeholder='Entrer votre adresse e-mail ' />
            </div>
            <div className="flex-item">
                <label htmlFor="tel">Numéro de téléphone</label><br />
                <input type="text" name="" id="tel" placeholder='Entrer votre numéro' />
            </div>
            <div className="flex-item">
                <label htmlFor="specialite">Spécialité</label><br />
                <input type="text" name="" id="specialite" placeholder='Veuiller saisir votre spécialité : ' />
            </div>
            <div className="flex-item">
                <label htmlFor="nomcabinet">Nom entreprise ou cabinet</label><br />
                <input 
                    type="text" name="" id="nomcabinet" 
                    placeholder="Veuiller saisir l'initial de votre entreprise ou cabinet : (ex UAM)" 
                />
            </div>
            
            <div className="flex-item">
                <label htmlFor="mdp">Mot de passe</label><br />
                <input type="text" name="" id="mdp" placeholder='Entrer votre mot de passe' />
            </div>
            <div className="flex-item">
                <label htmlFor="mdp-corfirm">Confirmer votre mot de passe</label><br />
                <input type="text" name="" id="mdp-corfirm" placeholder='Veuiller confirmer votre mot de passe' />
            </div>

            <div className="terms-of-use-container">
                <div className="terms-of-use">
                    <input type="checkbox" id="conditions" name="conditions" defaultChecked />
                    <label for="conditions">
                        J'accepte les conditions <a 
                            href="#"
                        >d'utisation de la plateforme</a>.
                    </label>
                </div>
                
                <div>
                    <input type="button" value="S'inscrire" />
                </div> 
            </div>
        </div>
    </div>
  );
}

export default InscriptionPrestataire;