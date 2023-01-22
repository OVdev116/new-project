import React, { useContext, useEffect } from 'react';
import Context from './../assets/js/Context';
import Pagination from './Pagination';
import { genre } from '../genre';
import './Filter.css';
let checkedArr = [];
let checkedGenreList=[];
function Filter() {
    const listFilms = useContext(Context);

    const sortingList = [
        {
            name: 'Популярные по убыванию',
            sortProperty: 'popularity_low',
        },
        {
            name: 'Популярные по возрастанию',
            sortProperty: 'popularity_hight',
        },
        {
            name: 'Рейтинг по убыванию',
            sortProperty: 'raiting_low',
        },
        {
            name: 'Рейтинг по возрастанию',
            sortProperty: 'raiting_hight',
        },
    ];
    const yearsList = [
        { year: 2020 },
        { year: 2019 },
        { year: 2018 },
        { year: 2017 },
    ];
    const sorting = (option) => {
        const sortArr = [...listFilms.films];
        switch (option) {
            case 'popularity_low':
                sortArr.sort((a, b) => b.popularity - a.popularity);
                break;
            case 'popularity_hight':
                sortArr.sort((a, b) => a.popularity - b.popularity);
                break;
            case 'raiting_low':
                sortArr.sort((a, b) => b.vote_average - a.vote_average);
                break;
            case 'raiting_hight':
                sortArr.sort((a, b) => a.vote_average - b.vote_average);
                break;
            default:
                break;
        }
        listFilms.useSetList(sortArr);
    };

    const sortingYear = (option) => {
        const sortArr = [...listFilms.setList];
        let newArr = [];
        sortArr.filter((item) => {
            if (new Date(item.release_date).getFullYear() === +option) {
                newArr.push(item);
            }
        });
        listFilms.useSetList(newArr);
    };
    const checkedGenre = (value) => {
        const sortArr = [...listFilms.films];
        let newArr = []; 
        sortArr.filter((item) => {
           item.genre_ids.forEach((element) => {     
                if ( value.includes(element) ) {
                    newArr.push(item);
                }
            });
        });
        listFilms.useSetList(newArr);
    };
    const checked=(e)=>{
    checkedArr.push({target:e.target,checked:e.target.checked});    
    };
    return (
        <div className="filter">
            <div className="title">Фильтр</div>
            <div className="select__container">
               <select
                name=""
                id=""
                onChange={(e) => { 
                    sorting(e.target.value);
                }}
            >
                {sortingList.map((item, index) => {
                    return (
                        <option
                            key={`${index}_${item.sortProperty}`}
                            value={item.sortProperty}
                        >
                            {item.name}
                        </option>
                    );
                })}
            </select>
            <select
                name=""
                id=""
                onChange={(e) => {
                    sortingYear(e.target.value);
                }}
            >
                {yearsList.map((item, index) => {
                    return (
                        <option key={`${index}_${item.year}`} value={item.year}>
                            {item.year}
                        </option>
                    );
                })}
            </select>   
            </div>
          
            {genre.map((item) => (
                <div className="form__input" key={item.id}>
                    <input
                        type="checkbox"
                        id={String(item.id)}
                        value={item.id}
                        onChange={(e) => {
                            checkedGenreList.push(+e.target.value)
                            checkedGenre(checkedGenreList);
                            checked(e)
                            
                        }}
                    />
                    <label htmlFor={String(item.id)} /> {item.name}
                </div>
            ))}
            <button className='clear' onClick={() => {
              checkedArr.forEach(item=>{item.target.checked=false;
                listFilms.useSetList(listFilms.films)
                 }
              )
              
                
            }}>Сбросить фильтры</button>
        
        </div>
    );
}
export default Filter;
