import Navbar from "../navbar/Navbar";
import Slideshow from "../slideshow/Slideshow";
import styles from './Header.module.css'

const Header = () => {
    return (
        <div>
            <div>
                <Navbar />
                <Slideshow />
            </div>
        </div>
    );
}

export default Header;