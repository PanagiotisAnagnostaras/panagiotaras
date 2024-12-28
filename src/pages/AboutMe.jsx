import './page.css'
import thinker from "../images/thinker.jpg"
import Timeline from '../components/Timeline'
let AboutMe = () => {
    return (<div>
        <h2>About me</h2>
        <img src={thinker} alt="Thinker" class="image-resized"></img>
        <hr />
        <a className='link-style' href="CV.pdf" target="_blank" download>Download CV</a>
        <a className='link-style' href="https://www.linkedin.com/in/panagiotis-anagnostaras-1aa7b5155/" target="_blank">Linkedin account</a>
        <Timeline />
    </div>)
}

export default AboutMe;