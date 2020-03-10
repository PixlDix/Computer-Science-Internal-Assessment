import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const toggleDM = () => {

}

const NavBar = () => {
    return(
        <nav className='navbar'>
            <div>
                <Link to='/' className='brand-logo'>Typeway</Link>
                <Link to='/signinform' className='authBtn'>Log in</Link>
                <Link to='/signupform' className='authBtn'>Sign up</Link>
                <button className='authBtn' onClick={toggleDM}>Toggle Dark-Mode</button>
            </div>
        </nav> 
    )
}

export default NavBar;