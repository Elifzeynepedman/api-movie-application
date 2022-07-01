import React from 'react'
import '../../Home/home.css'
const API_IMG="https://image.tmdb.org/t/p/w500"

const UpcomingItems = ({title,poster_path, original_language ,release_date, vote_average, overview}) => {
    return(
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <div className='card-front-inner'>
            <img src={API_IMG + poster_path} alt={title}/>
            <div className='car-front-title'>
            <p>{title}</p>
            </div>
            </div>
          </div>
          <div className='card-back'>
            <h1>{title}</h1>
              <strong>Overview:</strong>{overview}
            <div className='language'>
              <strong>Rating: </strong> {vote_average}
            </div>
            <div className='language'>
              <strong>release Date: </strong>{release_date}
            </div>
          </div>
        </div>
      </div>
      )
}

export default UpcomingItems
