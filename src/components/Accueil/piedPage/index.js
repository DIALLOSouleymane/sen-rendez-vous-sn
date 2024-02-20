import React from 'react'
import './index.scss';
import logo from '../../../assets/Logo/logo.png';
import { Link } from 'react-router-dom';
import fb from '../../../assets/social_networks_icones/fb.jpeg';
import linkedin from '../../../assets/social_networks_icones/linkedin.jpeg';
import twitter from '../../../assets/social_networks_icones/twitter.jpeg';

function PiedPage() {
  return (
    <div className='container-pied-page'>
        <div className='logo-entreprise'>
            <Link className='logo' to='/'
                style={{textDecoration: 'none', color: 'white'}}>
                <img src={logo} alt='Logo'/>
                <h3 className='company-name'>Nom Entreprise</h3>
            </Link>
            <p className='copyright'>
                Copyright &copy; 2024<br />
                ALL rights reverved!
            </p>
        </div>
        <div className='our-services'>
            <h3>Nos services</h3>
            <p>
                <a href='#'>Nom Service 1</a>
            </p>
            <p>
                <a href='#'>Nom Service 2</a>
            </p>
            <p>
                <a href='#'>Nom Service 3</a>
            </p>
        </div>
        <div className='about-us'>
            <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
                <h3>Notre Entreprise</h3>
            </Link>
            <p>
                <a href='#' >A propos de nous</a>
            </p>
            <p>
                <a href='#' >Nous contacter</a>
            </p>
        </div>
        <div className='support'>
                <h3>Support</h3>
            <p>
                <a href='#' >Par où commencer</a>
            </p>
            <p>
                <a href='#' >Assistance</a>
            </p>
        </div>
        <div className='social-networks'>
            <h3>Nous suivre</h3>
            <p>
                <a href='#' >
                    <img src={fb} alt="fb icon" /> Facebook
                </a>
            </p>
            <p>
                <a href='#' >
                <img src={twitter} alt="Twitter icon" /> Twitter
                </a>
            </p>
            <p>
                <a href='#' >
                <img src={linkedin} alt='LinkedIn icon'/> LinkedIn
                </a>
            </p>
        </div>

    </div>
    
  )
}

export default PiedPage;