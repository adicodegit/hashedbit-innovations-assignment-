import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.css';

function Create() {
    const location = useLocation();
    const navigate = useNavigate();
    const { movie, movieId } = location.state || {};

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBooking = {
            id: Date.now(), 
            movieId,
            movieName: movie,
            ...formData
        };

        navigate(`/bookings/${newBooking.id}`, {
            state: {booking: newBooking}
        })
    };

    return (
        <div className="create-container">
            <h1>Booking for: {movie}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Mobile:</label>
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Create;