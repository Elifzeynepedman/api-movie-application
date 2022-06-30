import React, { useState } from 'react'
import './search.css'
import {BsSearch} from 'react-icons/bs'
const SearchMovies = ({title,poster_path, original_language ,release_date, vote_average, overview,setItems}) => {
    const [query, setQuery] = useState("");
    const searchMovies = async (e) => {
      e.preventDefault();
  
      const url = `https://api.themoviedb.org/3/search/movie?api_key=3fa71c2815cdb8a2118b76b8109667b5&language=en-US&query=${query}`;
  
      try {
          const res = await fetch(url);
          const data  = await res.json();
          console.log(data);
          setItems(data.results);
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
        
        
      </section>
  
      
    )
    }


export default SearchMovies
