import { useParams, Link } from 'react-router-dom';
import movies from '../../data/movies.json';
import './style.css';

function Show() {
    const { id } = useParams();
    const movie = movies.find(movie => movie.id === parseInt(id));

    return (
        <div className="show-container">
            <img src={movie.image} alt={movie.name} />
            <div className="show-content">
                <h1>{movie.name}</h1>
                <p>{movie.description}</p>
                <Link to='/bookings' state={ {movie: movie.name, movieId: movie.id} } className="book-link">
                    Book Seat
                </Link>
            </div>
        </div>
    );
}

export default Show;