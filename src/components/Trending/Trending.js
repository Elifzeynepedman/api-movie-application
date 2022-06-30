import React , {useState,useEffect} from 'react'
import Items from '../../pages/Home/Items';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './trending.css'
const Trending = ({title,poster_path, original_language ,release_date, vote_average, overview}) => {
    const [items, setItems]= useState([]);


    
        const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=3fa71c2815cdb8a2118b76b8109667b5`;
    
         useEffect(()=>{
             fetch(url)
             .then((res)=>res.json())
             .then(data=>{
             setItems(data.results)
        })

  },[])
  
  return (
    <div>
    <Header/>
    <div className="trending_movies">
        <h4>Trending Movies</h4>
    </div>
    <div className='container__home'>
    <div className="cards">
     {items.map((movie)=><Items key={movie.id} {...movie}/>)}
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Trending
