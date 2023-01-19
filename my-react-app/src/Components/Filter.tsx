import React from 'react';

import Pagination from './Pagination';
import { genre } from '../genre';
import './Filter.css';

function Filter() {
    return (
        <div className="filter">
            <div className="title">Фильтр</div>
            <select name="" id="">
                <option value="value1">Значение 1</option>
                <option value="value2">Значение 2</option>
                <option value="value3">Значение 3</option>
            </select>
            {genre.map((item) => (
                <div className="form__input" key={item.id}>
                    <input type="checkbox" id={String(item.id)} />
                    <label htmlFor={String(item.id)} /> {item.name}
                </div>
            ))}

            <Pagination />
        </div>
    );
}
export default Filter;
