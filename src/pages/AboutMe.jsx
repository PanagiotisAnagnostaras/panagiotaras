import './page.css'
import thinker from "../images/thinker.jpg"
let AboutMe = () => {
    return (<div>
        <h2>Who am I</h2>
        <img src={thinker} alt="Thinker"></img>
        <hr />
        <p className="p">
            I am a robotics software engineer working in the field of planning and control, graduated from ETH in 2023.
            Based in Zurich Switzerland, originally from Kalamata, Greece.
        </p>
        <a className='link-style' href="https://www.linkedin.com/in/panagiotis-anagnostaras-1aa7b5155/" target="_blank">Linkedin account</a>
    </div>)
}

export default AboutMe;