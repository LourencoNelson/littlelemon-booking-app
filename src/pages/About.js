import about from '../assets/about.jpg'
const About = () => {
    return (
        <section id="about" className="about">
            <div className='about-content'>
            <div className='content'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Founded in 2018, Little Lemon is a family-owned Mediterranean restaurant, committed to providing a dining experience that is both delicious and comforting. Our menu is designed to cater to the diverse tastes of our patrons, ensuring that every meal is a special treat.</p>
            </div>
            <img src={about} alt="About"/>
            </div>
        </section>
    );
}

export default About;