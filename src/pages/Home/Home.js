import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import './home.css'
import Items from './Items';
import Footer from '../../components/Footer/Footer'
import { BsSearch } from 'react-icons/bs';
import SearchMovies from '../../components/Search/SearchMovies'
const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=3fa71c2815cdb8a2118b76b8109667b5"


const Home = () => {

  const [items, setItems]= useState([]);
  const [query, setQuery] = useState("");


  useEffect(()=>{
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      setItems(data.results)
    })

  },[])

 /* const searchMovies= async(e)=>{
    e.preventDefault();
    console.log("Searching...");
    try{
      const url = `https://api.themoviedb.org/3/search/movie?api_key=3fa71c2815cdb8a2118b76b8109667b5&language=en-US&query=${query}`;
      const res=await fetch(url);
      const data=await res.json;
      console.log(data);
      setItems(data.results);
    }catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
*/
  return (
    <div className="home__page">
     <Header/>   
     <div className='movie_box'>
     <SearchMovies setItems={setItems}/>
     {items.length>0 ?(
     <div className='container__home'>
     <div className="cards">
      {items.map((movie)=><Items key={movie.id} {...movie}/> )}
     </div>
     </div>
     ):(
      <div>
      <h2>Sorry! No Movies Found</h2>
      <h5>Please try another name</h5>
    </div>
     )}
     </div>
     <Footer/>

    </div>

    
  )
}

export default Home
