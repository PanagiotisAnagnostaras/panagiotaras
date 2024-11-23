import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navBar'>
            <Link to="/">Take me Home</Link>
            <Link to="/aboutme">About me</Link>
            <Link to="/projects">Projects</Link>
        </div>
    )

}
//  <a href="https://github.com/PanagiotisAnagnostaras" target="_blank">GitHub</a>
export default Navbar;