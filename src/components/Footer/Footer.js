import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>

     
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/elif-edman-b4b425167/' target="_blank" ><BsLinkedin className='Icon_footer'/></a>
        <a href='https://github.com/Elifzeynepedman' target="_blank"><BsGithub className='Icon_footer'/></a>
        <a href='https://www.instagram.com/elif.edman/'  target="_blank"><BsInstagram className='Icon_footer'/></a>
      </div>
      <div className="footer_text">
      <div className="footer__copyright">
         <small>&copy; Elif Edman. All rights reserved.</small>
      </div>
         <p className="tmdb"> This website was developed using <a href="https://www.themoviedb.org/">The movie Database</a></p>
  
         </div>
    </footer>

  )
}

export default Footer
