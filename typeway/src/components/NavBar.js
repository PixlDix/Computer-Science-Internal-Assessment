import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className='navbar'>
            <div>
                <Link to='/' className='brand-logo'>Typeway</Link>
                <Link to='/signinform' className='authBtn'>Log in</Link>
                <Link to='/signupform' className='authBtn'>Sign up</Link>
            </div>
        </nav> 
    )
}

export default NavBar;