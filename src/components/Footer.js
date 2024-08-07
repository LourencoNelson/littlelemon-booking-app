import logo from '../assets/logo_footer.png';
const Footer = () => {
    return (
        <footer>
            <img src={logo} alt=""/>
            <nav>
            <h3>Doormat Navigation</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
            </nav>
            <div>
            <h3>Contact</h3>
            <ul>
                <li><a href="/">Address</a></li>
                <li><a href="/">Phone Number</a></li>
                <li><a href="/">Email</a></li>
            </ul>
            </div>
            <div>
            <h3>Social Media Links</h3>
            <ul>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Twitter</a></li>
                <li><a href="/">Instagram</a></li>
            </ul>
            </div>
         </footer>
    );
}

export default Footer;