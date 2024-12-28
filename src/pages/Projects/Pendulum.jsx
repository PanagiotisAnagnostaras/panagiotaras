import '../page.css';
import pendulum from "../../images/pendulum.png";
import React, { useState } from 'react';

let Pendulum = () => {
    return (
        <div>
            <h2>Inverted Pendulum</h2>
            <a className='link-style' href="https://github.com/PanagiotisAnagnostaras/garage" target="_blank">Github repo</a>
            <p>This project is about building a complete application for simulating a cart-pendulum system.</p>
            <img src={pendulum} alt="pendulum" class="responsive-img"></img>
            <p>It consists of two docker containers:
                <ol>
                    <li>Front end</li>
                    <li>Back end</li>
                </ol>
            </p>
            <p>
                <h3>Container 1: front_end_container</h3>
                Written in JS and uses React
                Responsible for the user interface and for starting the simulation
                <h3>Container 2: back_end_container</h3>
                Written in Python and C++.
                Python uses Django for the back end server
                The physics are written in C++ with a Python wrapper. The wrapper uses pybind11.
            </p>
        </div>
    );
};

export default Pendulum;
