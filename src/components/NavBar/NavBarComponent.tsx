import './index.css';

import Logo from '../../assets/logo.png';

export default function NavBarComponent() {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img src={Logo} alt="" />
                <div>Vico Della Pizza</div>
            </div>
        </nav>
    )
}