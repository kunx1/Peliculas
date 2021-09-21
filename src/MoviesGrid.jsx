import React from 'react'
import moviesJson from './movies.json'
import Card from './Card'
import styles from './MoviesGrid.module.css'

const MoviesGrid = () => {

    console.log(moviesJson)

    return (
      <div>
        <ul className={styles.moviesGrid}>
          {
            moviesJson.map( movie => (
               <Card key={movie.id} movie={movie}/>
            ))
          }
        </ul>
      </div> 
    );
}

export default MoviesGrid

 {/* dataJson.lenght===0 ? <p>Mensaje no hay componentes</p> : 
                dataJson.map(movie =>(
                    <Card movie ={movie} key={movie.Title} />

                ))  */}