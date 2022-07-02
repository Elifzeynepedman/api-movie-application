import React, {useState, useEffect}from 'react'
import UpcomingItems from './UpcomingItems'
import CustomPagination from '../../../components/Pagination/CustomPagination'
import Footer from '../../../components/Footer/Footer'
const Upcoming = () => {
    const [items, setItems]= useState([]);
    const[page, setPage]= useState(1);

    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
    
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then(data=>{
        setItems(data.results)
   })

},[page])
  return (
    <div className="tab_options" >
 <div className='container__home'>
    <div className="cards">
     {items.filter((movie)=>movie.poster_path!==null).map((movie)=>
         <UpcomingItems key={movie.id} {...movie}/>)
     }
    </div>
    </div>
    <CustomPagination setPage={setPage}/>

    <Footer/>
    </div>
  )
}

export default Upcoming
