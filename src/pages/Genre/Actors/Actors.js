import React, {useState,useEffect} from 'react'
import Items from '../../Home/Items';
import CustomPagination from '../../../components/Pagination/CustomPagination';
import Footer from '../../../components/Footer/Footer';


const Actors = () => {
    const [items, setItems]= useState([]);
    const[page, setPage]= useState(1);

    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
    
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then(data=>{
        setItems(data.results)

   })

},[[page]])
  return (
    <div className="tab_options" >
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

export default Actors
