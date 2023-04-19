import { NavLink } from 'react-router-dom';
import Common from './Common';
import aboutImg from './../image/img2.jpeg';
function About() {

    return (
        <>
            <Common name="Welcome to About page"
                imgsrc={aboutImg}
                visit="/contact"
                btnName="Contact Now"
            />
        </>
    )
}
export default About;