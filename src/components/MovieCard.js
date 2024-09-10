import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ el }) => {
    if (!el) {
        return <div>No movie data available</div>;
    }

    const { title, image, rate, time_slot1, time_slot2 } = el;

    return (
        <div className="card">
            <Link to={`/movie/${title}`}>
                <img src={image} alt={title} />
                <div className="card-content">
                    <p className="movie-name">{title}</p>
                    <div className="movie-info">
                        <p>{rate}</p>
                        <p className="time">{time_slot1} <span>{time_slot2}</span></p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;
