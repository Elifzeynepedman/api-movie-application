import React from 'react'
import Pagination  from '@material-ui/lab/Pagination'
const CustomPagination = ({setPage, numOfPages = 10}) => {
    const handlePageChange=(page)=>{
        setPage(page);
        window.scroll(0,0);
        
    }
  return (
  
    <div>
        <Pagination 
        style={{marginRight:"30px",float:"right", marginTop:"40px",marginBottom:"-40px"}} color="primary" count={numOfPages} onChange={(e)=>handlePageChange(e.target.textContent)}/>  
    </div>
  )
}

export default CustomPagination
