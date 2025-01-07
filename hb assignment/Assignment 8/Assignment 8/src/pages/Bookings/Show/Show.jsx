import { useLocation } from 'react-router-dom';
import './style.css';

function Show() {
    const location = useLocation();
    const { booking } = location.state || {};

    if (!booking) {
        return <div>Booking not found</div>;
    }

    return (
        <div className="show-booking-container">
            <h1>Booking Details</h1>
            <div className="booking-card">
                <p><strong>Booking ID:</strong> {booking.id}</p>
                <p><strong>Movie:</strong> {booking.movieName}</p>
                <p><strong>Name:</strong> {booking.name}</p>
                <p><strong>Email:</strong> {booking.email}</p>
                <p><strong>Mobile:</strong> {booking.mobile}</p>
            </div>
        </div>
    );
}

export default Show;