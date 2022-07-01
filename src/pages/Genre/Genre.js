import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import Select from "react-select";
import Actors from './Actors/Actors';
import './genre.css'
import TvSeries from './TvSeries/TvSeries';
import Upcoming from './Upcoming/Upcoming';
const Genre = () => {
  const [value,setValue]=useState('');

 
function Tab(e) {
  
  if (e.value === 'Now Playing') {
    return (<Actors />);
  }else if (e.value ==='Tv Series') {
    return (<TvSeries />);
  }else if (e.value ==='Upcoming') {
    return (<Upcoming />);
  }
}



  const handleChange = (e) => {
    setValue(e.target.value);
  };


  
  return (
    <div>
      <Header/>
      <select className="select_drop" value={value} onChange={handleChange}>
        <option className="options" value="Select Category" disabled>Select Category</option>
        <option className="options" value="Now Playing">Now Playing</option>
        <option className="options" value="Tv Series">Tv Series</option>
        <option className="options" value="Upcoming">Upcoming</option>
      </select>
      <Tab value={value} />

    </div>
  );
}



export default Genre
