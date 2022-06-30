import React from 'react'
import Items from './Items'
import './home.css'
const MovieList = (props) => {
  return (
    <>
      {props.items.map((item, index)=>
      <div>
            <Items key={item.id} item={item}></Items>
      </div>)}
    </>
  )
}

export default MovieList
