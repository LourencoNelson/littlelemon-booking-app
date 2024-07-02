import logo from '../assets/logo_footer.png';
const Footer = () => {
    return (
        <footer>
            <img src={logo} alt=""/>
            <h3>Doormat Navigation</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/about">Order Online</a></li>
                <li><a href="/contact">Login</a></li>
            </ul>
            <h3>Contact</h3>
            <ul>
                <li><a href="/">Address</a></li>
                <li><a href="/">Phone Number</a></li>
                <li><a href="/">Email</a></li>
            </ul>
            <h3>Social Media Links</h3>
            <ul>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Twitter</a></li>
                <li><a href="/">Instagram</a></li>
            </ul>
         </footer>
    );
}

export default Footer;