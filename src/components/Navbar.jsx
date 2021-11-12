import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'


export const Navbar = () => {
    return (
        <header>
            <Link id="logo" to='/'>
                Logo
            </Link>
            <nav>
                <ul>
                    <li><Link to='/' className="here">Here</Link></li>
                    <li><Link to='/Cards'>Cards</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    {/* <li><Link to='/'>Link</Link></li> */}
                </ul>
            </nav>
        </header>
    )
}
