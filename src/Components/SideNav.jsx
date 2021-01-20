import React from 'react';
import './SideNav.css';
import {Link} from 'react-router-dom'

export function SideNav() {
    const navStyle = {textDecoration: 'none'};

    return (
        <div style={navStyle} className="Navbar">
            <nav className='side-nav'>
                <Link to="/">Home</Link>

                <Link to="/DataTable">TESTING</Link>

                <Link to="/Studenten">Studenten</Link>
                <Link to="/Resultaten">Resultaten</Link>
                <Link to="/Toetsen">Toetsen</Link>
                <Link to="/Statistiek">Statistiek</Link>
                <Link to="/IndividueleStudent" style={{color: "lightskyblue"}}>Individuele student (WIP)</Link>
            </nav>
        </div>
    );
}