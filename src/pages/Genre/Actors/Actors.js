import React, {useState,useEffect} from 'react'
import Items from '../../Home/Items';
import CustomPagination from '../../../components/Pagination/CustomPagination';
import Footer from '../../../components/Footer/Footer';


const Actors = () => {
    const [items, setItems]= useState([]);
    const[page, setPage]= useState(1);

    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=3fa71c2815cdb8a2118b76b8109667b5&page=${page}`;
    
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then(data=>{
          console.log(data);
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
