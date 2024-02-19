import './index.scss';
import logoApp from '../../assets/Logo/logo.png';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'
            style={{textDecoration: 'none'}}>
            <img src={logoApp} alt='Logo'/>
            <span className='company-name'>Nom Entreprise</span>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" className="home" to="/"
                style={{textDecoration: 'none'}}
                >Accueil</NavLink>
            <NavLink exact="true" activeclassname="active" className="create-account" to="/createaccount"
                style={{textDecoration: 'none'}}
                >Créer Compte</NavLink>
            <NavLink exact="true" activeclassname="active" className="login" to="/login"
                style={{textDecoration: 'none'}}
                >Se connecter</NavLink>
        </nav>
    </div>
);

export default NavigationBar;