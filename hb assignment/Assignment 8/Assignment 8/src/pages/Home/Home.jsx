import { Link } from 'react-router-dom';
import './style.css';
import movies from '../../data/movies.json';

function Home() {
    return (
        <>
            <div className="cards-container">
                {movies.map(movie => (
                    <div className="card" key={movie.id}>
                        <img src={movie.image} alt={movie.name} />
                        <div className="card-content">
                            <h2>{movie.name}</h2>
                            <div>
                                <Link className='book-link' to={`/movies/${movie.id}`}>Show More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;