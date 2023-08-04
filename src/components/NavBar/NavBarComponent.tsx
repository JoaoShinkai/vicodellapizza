import './index.css';

import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function NavBarComponent() {
    return (
        <nav className='navbar'>
            <Link to="/" className='navbar-logo'>
                <img src={Logo} alt="" />
                <div>Vico Della Pizza</div>
            </Link>
            <Link to="/cardapio" className='navbar-cardapio'>
                Ver cardápio
            </Link>
        </nav>
    )
}