import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { movies } from '../db/Movies';

const MovieDescription = () => {
    const { title } = useParams();
    const movie = movies.find((el) => el.title === title);

    if (!movie) {
        return <div>Movie not found</div>;
    }

    const { image, rate, time_slot1, time_slot2, description, trailerLink } = movie;

    return (
        <div className="movie-description">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p><strong>Rating:</strong> {rate}</p>
            <p><strong>Time Slot:</strong> {time_slot1} <span>{time_slot2}</span></p>
            <p>{description}</p>
            <iframe
                width="560"
                height="315"
                src={trailerLink}
                title={`${title} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <br />
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default MovieDescription;
