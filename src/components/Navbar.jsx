import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import '../styles/navbar.css'


function Navbar({menu}) {
    return (
        <nav className='index-nav'>
            <FontAwesomeIcon icon={faBars} className='icon'/>
            <img
                src={menu.logo}
                alt="Le logo de la librairie Viliri"
                className='logo_viliri'
            />
            <div className='index-right'>
                <p className='right_one'>
                    <FontAwesomeIcon icon={faHeart} className='icon' />
                    Whishlist
                </p>
                <p>
                    <FontAwesomeIcon icon={faUser} className='icon' />
                    Sign in
                </p>
            </div>
        </nav>
    )
}

Navbar.PropTypes = {
    menu: PropTypes.shape({
        logo: PropTypes.string.isRequired,
    }).isRequired,
};

export default Navbar;