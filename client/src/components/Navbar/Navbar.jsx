import './Navbar.css'
import { Link } from "react-router-dom"; 

const Navbar = () => {
    return <nav className="navBar">
                <ul className="navBar__link-container">
                    <li><Link to="/">Home</Link>{" "}</li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                </ul>
            </nav>;
};

export default Navbar
