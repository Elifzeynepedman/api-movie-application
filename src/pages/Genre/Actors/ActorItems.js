import React from 'react'
import '../../Home/home.css'
const API_IMG="https://image.tmdb.org/t/p/w500"


const ActorItems = ({profile_path, name, popularity}) => {
    return (
        <div className="tv_series_container">
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <div className='card-front-inner'>
                
            <div className='car-front-title'>
            <p>{name}</p>
            </div>
            </div>
          </div>
          <div className='card-back'>
            <h1>{name}</h1>
              <strong>Overview:</strong>{popularity}
        
          </div>
        </div>
      </div>
      </div>
      )
}

export default ActorItems
