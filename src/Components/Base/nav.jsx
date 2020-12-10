import React from 'react';
import './heading.css';
import {Link} from 'react-router-dom'

function Nav() {
    const navStyle = {
textDecoration: 'none'
    };

    return (
        <nav className='nav'>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link style={navStyle} to='/resultaten'>
                    <li>Resultaten</li>
                </Link>
                <Link style={navStyle} to='/student'>
                    <li>Student</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
