import '../page.css';
import pendulum from "../../images/pendulum.png";
import React, { useState } from 'react';

let Pendulum = () => {
    return (
        <div>
            <h2>Inverted Pendulum</h2>
            <p>This project is about building a complete application for simulating a cart-pendulum system.</p>
            <img src={pendulum} alt="pendulum"></img>
            <p>It consists of three docker containers:
            <ol>
                <li>Front end</li>
                <li>Back end</li>
                <li>Physics Simulator</li>
            </ol>
            </p>
            <p>
            <h3>Front end</h3>
            Written in Java Script with React. Responsible for setting up the simulation by providing a user friendly format.
            <h3>Back end</h3>
            Written in Python with Django. Responsible for receiving the simulation inputs from the user and starting the simulation in the Physics Simulator.
            <h3>Physics Simulator</h3>
            Written in C++ with Pistache and Eigen. Uses multithreading to simulate the different parts of the system.
            </p>
        </div>
    );
};

export default Pendulum;
