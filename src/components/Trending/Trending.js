import React , {useState,useEffect} from 'react'
import Items from '../../pages/Home/Items';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from "axios";

import CustomPagination from '../Pagination/CustomPagination';
import './trending.css'

const Trending = () => {
    const [items, setItems]= useState([]);
    const[page, setPage]= useState(1);

    
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=3fa71c2815cdb8a2118b76b8109667b5&page=${page}`;
    
         useEffect(()=>{
             fetch(url)
             .then((res)=>res.json())
             .then(data=>{
             setItems(data.results)
             window.scroll(0, 0);

        })

  },[page])
  
  return (
    <div>
    <Header/>

    <div className="trending_movies">
        <h4>Trending Movies</h4>

    </div>
    <div className='container__home'>
    <div className="cards">
     {items.filter((movie)=>movie.poster_path!==null).map((movie)=>
         <Items key={movie.id} {...movie}/>)
     }
    </div>
    </div>
    <CustomPagination setPage={setPage}/>

    <Footer/>
    
    </div>
  )
}

export default Trending
