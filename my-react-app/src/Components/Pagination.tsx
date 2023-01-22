import React, { useContext, useState } from 'react';
import './Pagination.css';
import Context from './../assets/js/Context';


function Pagination({ PerPage,paginate}){
    const listFilms = useContext(Context);
    let total=listFilms.setList.length;
   console.log(listFilms.current); 
    let pageNumbers=[];
    for(let i=1;i<Math.ceil((total/PerPage)); i++){     
     pageNumbers.push(i);            
    }
   
return (
    <div className="pagination">
        {pageNumbers.map(number=>{ 
            return <a href='#' className='paginate__btn' onClick={()=>{
                paginate(number)
            }}>{number}</a>
        })}

    </div>
)
}

export default Pagination;
