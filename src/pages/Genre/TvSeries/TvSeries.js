import React, {useState,useEffect} from 'react'
import TvItems from './TvItems';
import CustomPagination from '../../../components/Pagination/CustomPagination';
import Footer from '../../../components/Footer/Footer';
const TvSeries = () => {
    const [items, setItems]= useState([]);
    const[page, setPage]= useState(1);

    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
    
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then(data=>{
          console.log(data);
        setItems(data.results)
   })

},[page])
  return (
    <div className="tab_options" >
 <div className='container__home'>
    <div className="cards">
     {items.filter((tv)=>tv.overview!==null).map((tv)=>
         <TvItems key={tv.id} {...tv}/>)
     }
    </div>
    </div>
    <CustomPagination setPage={setPage}/>
    <Footer/>
    </div>
  )
}

export default TvSeries
