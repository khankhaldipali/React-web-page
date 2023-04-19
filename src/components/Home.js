import { NavLink } from 'react-router-dom';
import Common from './Common';
import homeImg from './../image/img1.jpeg';
function Home() {
    return (
        <>
            <Common
                name="Grow your business with"
                imgsrc={homeImg}
                visit="/service"
                btnName="Get Started"
            />
        </>
    )
}
export default Home;