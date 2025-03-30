import '../page.css';
import pendulum from "../../images/pendulum.png";
import garage from "../../images/garage.png";

let RLGarage = () => {
    return (
        <div>
            <h2>RL Garage</h2>
            <a className='link-style' href="https://github.com/PanagiotisAnagnostaras/garage" target="_blank">Github repo</a>
            <p>This project is about building a complete application for training policies with reinforcement learning.</p>
            <img src={garage} alt="garage" class=".image-resized1"></img>
            <p> It consists of two docker containers: </p>
            <h3>Container 1: front_end_container</h3>
            <p>
                Written in JS and uses React.<br />
                Responsible for the user interface and for starting the simulations.
            </p>
            <h3>Container 2: back_end_container</h3>
            <p>
                Written in Python and C++.<br />
                Python uses Django for the back end server.<br />
                The physics are written in C++ with a Python wrapper (pybind11) for communicating with the RL policy in Python. Currently it has two systems, an inverted pendulum and a point in a 2D plane. The implemented RL algorithm is PPO with pytorch.<br />
            </p>
        </div>
    );
};

export default RLGarage;
