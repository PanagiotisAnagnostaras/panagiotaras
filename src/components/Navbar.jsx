import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navBar'>
            <Link to="/panagiotaras/">Take me Home</Link>
            <Link to="/panagiotaras/aboutme">About me</Link>
            <Link to="/panagiotaras/projects">Projects</Link>
            <a href="https://github.com/PanagiotisAnagnostaras" target="_blank">GitHub</a>
        </div>
    )

}

export default Navbar;