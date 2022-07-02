import React from 'react'
import '../../Home/home.css'
const API_IMG="https://image.tmdb.org/t/p/w500"

const TvItems = ({name,poster_path, original_language, vote_average, overview,first_air_date}) => {
  return (
    <div className="tv_series_container">
    <div className='card'>
    <div className='card-inner'>
      <div className='card-front'>
        <div className='card-front-inner'>
        <img src={API_IMG + poster_path} alt={name}/>
        <div className='car-front-title'>
        <p>{name}</p>
        </div>
        </div>
      </div>
      <div className='card-back'>
        <h1>{name}</h1>
          <strong>Overview:</strong>{overview}
        <div className='language'>
          <strong>Rating: </strong> {vote_average}
        </div>

        <div className='language'>
          <strong>Air date: </strong> {first_air_date}
        </div>
      
        <div className='language'>
          <strong>Language: </strong>{original_language}
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default TvItems
