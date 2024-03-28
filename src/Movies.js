import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';
import './App.css'
const Movies = () => {
    const {movie}=useGlobalContext();
  return (
    <div className="container grid grid-4-col">
        {movie.map((curMovie)=>{
            const{imdbID , Title , Poster}=curMovie;
            const movieName=Title.substring(0,15);
            return <NavLink to = {`movie/${imdbID}`} key={imdbID}>
                    <section className='Movie-page'>
                        <div className="card_box ">
                            <span></span>
                                <h2 className='title'>{movieName.length>=15?`${movieName}...`:movieName}</h2>
                                <img className='img' src={Poster} alt={imdbID}/>
                        </div>                    
                    </section>
            </NavLink>
       })}
    </div>
  )
}

export default Movies