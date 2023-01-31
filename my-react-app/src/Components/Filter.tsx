import React from 'react';
import Pagination from './Pagination';
import { genre } from '../genre';
import './Filter.css';
import { Link } from 'react-router-dom';
import { data } from '../redux/reducer';
import { sortingList, yearsList } from '../shared/variables';
import { PopularSelect } from './popular-select';
import { YearSelect } from './year-select';
import { GenresForm } from './genres-form';

// const checkedGenreList: any = [];
function Filter() {
    return (
        <div className="filter">
            <div className="title">Фильтр</div>
            <Link
                to="favorites"
                onClick={() => {
                    dispatch({
                        type: 'FILTER_FAVORITES_LIST',
                    });
                }}
            >
                Избранные
            </Link>
            <div className="select__container">
                <PopularSelect />
                <YearSelect />
            </div>
            <GenresForm />
            <button className="clear" onClick={() => {}}>
                Сбросить фильтры
            </button>
        </div>
    );
}
export default Filter;
