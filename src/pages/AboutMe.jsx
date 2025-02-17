import './page.css'
import salkantay from "../images/salkantay.jpg"
import Timeline from '../components/Timeline'
let AboutMe = () => {
    return (<div>
        <h2>About me</h2>
        <figure>
            <img src={salkantay} alt="salkantay" class="image-resized" />
            <figcaption>Humantay lake, Peru.</figcaption>
        </figure>
        <hr />
        {/* <a className='link-style' href="CV.pdf" target="_blank" download>Download CV</a> */}
        <a className='link-style' href="https://www.linkedin.com/in/panagiotis-anagnostaras-1aa7b5155/" target="_blank">Linkedin account</a>
        <Timeline />
    </div>)
}

export default AboutMe;