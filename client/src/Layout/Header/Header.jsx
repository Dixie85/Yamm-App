import Navbar from '../../components/Navbar/Navbar';
import './Header.css'


const Header = () => {

    return (
        <header className="header">
            <h2 className='header__h2'>Yamm</h2>
            <Navbar />
        </header>
    )
};

export default Header