import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import booking from '../assets/booking.jpg';

function Booking() {
    return (<div className="container">
        <Header />
        <div className="booking">
            <h1>Reserve a Table</h1>
            <div className="booking-content">
                <BookingForm />
                <img src={booking} alt="" />
            </div>
        </div>
        <Footer />
    </div>);
}
export default Booking;