import hero from '../assets/restaurant_food_B.jpg'
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
                <Link to='/booking'><button>Reserve a Table</button></Link>
            </div>
            <img src={hero} alt="Hero"/>
        </section>
    );
}
export default Hero;