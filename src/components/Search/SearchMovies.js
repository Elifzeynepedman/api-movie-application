import React, { useState } from 'react'
import './search.css'
import {BsSearch} from 'react-icons/bs'
const SearchMovies = ({title,poster_path, original_language ,release_date, vote_average, overview}) => {
    const [query, setQuery] = useState("");
    const [movies,setMovies]= useState([]);
    const searchMovies = async (e) => {
      e.preventDefault();
  
      const url = `https://api.themoviedb.org/3/search/movie?api_key=3fa71c2815cdb8a2118b76b8109667b5&language=en-US&query=${query}`;
  
      try {
          const res = await fetch(url);
          const data  = await res.json();
          console.log(data);
          setMovies(data.results);
      }catch(err){
          console.error(err);
      } 
    }
  
    return (
      <section className="search__section">
        <div>
        <input type="text" placeholder="Search Movie..." value={query} onChange={(e) => setQuery(e.target.value)}
         style={{fontSize:'20px',color:'#0087bd',width:'300px', height:"30px", padding:'5px', textAlign:'center', borderRadius:'5px',border:'1px solid transparent',outline:'none'}}
         />
                <BsSearch  className="search__input" style={{marginLeft:'-40px'}} onClick={searchMovies}/> 
        </div>
        <div className='cards'>
            {movies.filter(movie=> movie.poster_path).map(movie =>(
          <div className="card" key={movie.id}>
              <div className='card-inner'>
                <div className='card-front'>
  
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title}/>
                    <p>{movie.title}</p>
                 </div>
             </div>
                
  
          </div>
          
        ))}
          </div>
      </section>
  
      
    )
    }


export default SearchMovies
