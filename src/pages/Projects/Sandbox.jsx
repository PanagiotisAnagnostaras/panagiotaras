import '../page.css';
import sandbox from "../../images/sandbox.jpg";

let Sandbox = () => {
    return (
        <div>
            <h2>Sandbox</h2>
            <a className='link-style' href="https://github.com/PanagiotisAnagnostaras/sandbox" target="_blank">Github repo general</a>
            <a className='link-style' href="https://github.com/PanagiotisAnagnostaras/deeplearningPlayground/tree/main" target="_blank">Github repo deeplearning</a>
            <p>This project is about building sandboxs for trying things in Python, C++, ROS, algorithms and deep learning.</p>
            <img src={sandbox} alt="sandbox" class="responsive-img"></img>
        </div>
    );
};

export default Sandbox;
