import React from 'react'
import './index.scss';
import connexionImg from '../../assets/images/connexion.png'

function Connexion() {
  return (
    <div className='connexion-container'>
        <div className="authentification">
            <h2>S'authentifier</h2>
            <div className="flex-item">
                <label htmlFor="mail">Email</label><br />
                <input type="text" name="" id="mail" placeholder='Entrer votre adresse e-mail ' />
            </div>
            <div className="flex-item">
                <label htmlFor="mdp">Mot de passe</label><br />
                <input type="text" name="" id="mdp" placeholder='Entrer votre mot de passe' />
            </div>
            <div className="flex-item">
                <input type="button" value="Se connecter" />
            </div>
        </div>

        <div className="authentification">
            <img src={connexionImg} alt="AuthImage" />
        </div>
    </div>
  );
}

export default Connexion;