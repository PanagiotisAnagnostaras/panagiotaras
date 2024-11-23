import '../page.css';
import pendulum from "../../images/pendulum.png";
import React, { useState } from 'react';

let Pendulum = () => {
    return (
        <div>
            <h2>Inverted Pendulum</h2>
            <a className='link-style' href="https://github.com/PanagiotisAnagnostaras/garage/tree/master/projects/inverted_pendulum" target="_blank" rel="noopener noreferrer">Code</a>
            <p>This project is about building a complete application for simulating a cart-pendulum system.</p>
            <img src={pendulum} alt="pendulum"></img>
        </div>
    );
};

export default Pendulum;
