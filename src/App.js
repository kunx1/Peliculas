import React from 'react';
import './App.css';
import MoviesGrid from './MoviesGrid';
import styles from './App.module.css'


function App() {
  return (
    <div className="App">
     <header>
       <h1 className={styles.title}>Movies</h1>
     </header>
     <main>
      <MoviesGrid />
     </main>
    </div>
  );
}

export default App;
