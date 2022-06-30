import React from 'react'
import './header.css'
import { Link } from "react-router-dom";
import {MdMovieFilter} from 'react-icons/md'
function Header() {
  return (
    <div className="container">
      <div className='header__container'>
        <h2 className='htwo'>AboutMovies</h2>
        <div className="header__links">
          <Link to='/'>Home</Link>
          <Link to='/Genre'>Genre</Link>
          <Link to='/Trending'>Trending</Link>

          <MdMovieFilter size={80} id="md_icon"/>
      </div>
     
</div>
    </div>
  )
}

export default Header
