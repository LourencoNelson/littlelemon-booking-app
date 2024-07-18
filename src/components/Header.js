import Nav from './Nav';
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/"><img src={logo} alt='logo'/></Link>
            <Nav/>
        </header>
    );
}
export default Header;