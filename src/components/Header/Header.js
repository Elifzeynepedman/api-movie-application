import React from 'react'
import './header.css'
import { Link } from "react-router-dom";
import {MdMovieFilter} from 'react-icons/md'
import Logo from '../../assets/d53d4431e82b4b7db31dadbacdc76cbd.png'
function Header() {
  return (
    <div className="container">
      <div className='header__container'>
        <h2 className='htwo'>AboutMovies</h2>
        <div className="header__links">
          <Link to='/'>Home</Link>
          <Link to='/Trending'>Trending</Link>

          <Link to='/Genre'>Other</Link>

          <img src={Logo} alt="Logo" className='logo_size'/>
        </div>
     
</div>
    </div>
  )
}

export default Header
