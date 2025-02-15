import '../page.css';
import pendulum from "../../images/pendulum.png";

let Pendulum = () => {
    return (
        <div>
            <h2>Inverted Pendulum</h2>
            <a className='link-style' href="https://github.com/PanagiotisAnagnostaras/garage" target="_blank">Github repo</a>
            <p>This project is about building a complete application for simulating a cart-pendulum system.</p>
            <img src={pendulum} alt="pendulum" class="responsive-img"></img>
            <p> It consists of two docker containers: </p>
            <h3>Container 1: front_end_container</h3>
            <p>
                <ul>
                    <li>Written in JS and uses React.</li>
                    <li>Responsible for the user interface and for starting the simulation.</li>
                </ul>
            </p>
            <h3>Container 2: back_end_container</h3>
            <p>
                <ul>
                    <li>Written in Python and C++.</li>
                    <li>Python uses Django for the back end server.</li>
                    <li>The physics are written in C++ with a Python wrapper (pybind11) for state extraction.</li>
                </ul>
            </p>
        </div>
    );
};

export default Pendulum;
