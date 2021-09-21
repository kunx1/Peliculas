import React from 'react'
import styles from './MovieCard.module.css'

const Card = ({movie}) => {

    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path

    return (
        <div>
            <li className={styles.Card}>
                <img 
                width={230} 
                height={345}
                className={styles.movieImage} src={imageUrl} alt={movie.title} />
                <div>{movie.title}</div>
            </li>
        </div>
    )
}

export default Card
