import React from "react";
import Pagination from "./Pagination";
import './Filter.css'

function Filter(){
return ( 
    <div className="filter">
    <div className="title">Фильтр</div>
   <select name="" id="">
   <option value="value1">Значение 1</option>
   <option value="value2" selected>Значение 2</option>
   <option value="value3">Значение 3</option>
   </select>
   <div className="form__input" />
   <input type="checkbox" id="val1"/><label htmlFor="val1" />Боевик
   <div className="form__input" />
   <input type="checkbox" id="val1"/><label htmlFor="val1" />Боевик
   <div className="form__input" />
   <input type="checkbox" id="val1"/><label htmlFor="val1" />Боевик

   <Pagination/>
    </div>
)
}
export default Filter