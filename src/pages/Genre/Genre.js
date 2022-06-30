import React from 'react'
import Header from '../../components/Header/Header'
import Select from "react-select";

import './genre.css'
const Genre = () => {
  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "#bde1ff", }),
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "white" : "white",
        color: isDisabled ? "grey" : "black",
        cursor: isDisabled ? "not-allowed" : "default"
      };
    }
  };
  const items = [    
    { label: "Select Genre", value: "Select Genre", isDisabled:true },

    { label: "Top Rated", value: "Top Rated" },
    { label: "Now Playing", value: "Now Playing"},
    { label: "Upcoming", value: "Upcoming"},
    { label: "Tv Series", value: "Tv Series"}

  ];
  return (
    <div>
      <Header/>
        <div className='dropdown'>
          <Select defaultValue={items[0]}
          label="Select Genre"
          options={items}
          styles={colourStyles}>


          </Select>
        </div>
    </div>
  )
}

export default Genre
