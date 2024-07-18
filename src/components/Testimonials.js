import RatingCard from './RatingCard';
const Testimonial = () => {
    return (
        <section className="testimonial">
            <h1>Testimonials</h1>
            <div className='ratings'>
            <RatingCard/>
            <RatingCard/>
            <RatingCard/>
            <RatingCard/>
            </div>
        </section>
    )
}

export default Testimonial;