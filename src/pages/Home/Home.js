import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import './home.css'
import Items from './Items';
import Footer from '../../components/Footer/Footer'
import { BsSearch } from 'react-icons/bs';
import SearchMovies from '../../components/Search/SearchMovies'
import Trending from '../../components/Trending/Trending';
import CustomPagination from '../../components/Pagination/CustomPagination';


const Home = () => {

  const [items, setItems]= useState([]);
  const [query, setQuery] = useState("");
  const[page, setPage]= useState(1);

  const url="https://api.themoviedb.org/3/movie/popular?api_key=3fa71c2815cdb8a2118b76b8109667b5&page=${page}"



  useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then(data=>{
      setItems(data.results)
    })

  },[page])
  
  return (
    <div className="home__page">
     <Header/>  
   
     <div className='movie_box'>
     <SearchMovies setItems={setItems}/>
     {items.length>0 ?(
     <div className='container__home'>
     <div className="cards">
     {items.filter((movie)=>movie.poster_path!==null).map((movie)=>
         <Items key={movie.id} {...movie}/>)
     }
     </div>
     </div>
     ):(
      <div>
      <h2>Sorry! No Movies Found</h2>
      <h5>Please try another name</h5>
    </div>
     )}
     </div>
     <CustomPagination setPage={setPage}/>

     <Footer/>

    </div>

    
  )
}

export default Home