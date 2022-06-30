import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import './home.css'
import Items from './Items';
import Footer from '../../components/Footer/Footer'
import SearchMovies from '../../components/Search/SearchMovies';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=3fa71c2815cdb8a2118b76b8109667b5"


const Home = () => {

  const [items, setItems]= useState([]);


  useEffect(()=>{
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      setItems(data.results)
    })

  },[])

  return (
    <div className="home__page">
     <Header/>   
     <SearchMovies/>
     <div className='container__home'>
     <div className="cards">
      {items.map((movie)=><Items key={movie.id} {...movie}/> )}
     </div>
     </div>
     <Footer/>

    </div>

    
  )
}

export default Home
