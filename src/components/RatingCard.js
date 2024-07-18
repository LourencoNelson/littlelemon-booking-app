import profile from '../assets/profile.jpg'

const RatingCard = () => {
    return (
        <div className="rating-card">
            <h4>4.5/5</h4>
            <div>
                <img src={profile} alt=""></img>
            <h5>John Doe</h5>
            </div>
            <p>Some review text</p>
        </div>
    );
}
export default RatingCard;