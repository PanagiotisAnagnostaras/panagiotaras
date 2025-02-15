import '../page.css';
import sandbox from "../../images/sandbox.jpg";

let Sandbox = () => {
    return (
        <div>
            <h2>Sandbox</h2>
            <a className='link-style' href="https://github.com/PanagiotisAnagnostaras/sandbox" target="_blank">Github repo</a>
            <p>This project is about building a sandbox for trying things in Python, C++, ROS and algorithms.</p>
            <img src={sandbox} alt="sandbox" class="responsive-img"></img>
        </div>
    );
};

export default Sandbox;
