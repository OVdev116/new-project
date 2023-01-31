import React from 'react';
import { Card } from './Card';
import './List.css';

function List({ filmList }) {
    return (
        <ul className="list">
            {filmList.map((item) => {
                const infoFilm = {
                    title: item.title,
                    raiting: item.vote_average,
                    poster: item.poster_path || item.backdrop_path,
                    id: item.id,
                };
                return (
                    <Card
                        key={`${Number(infoFilm.id)}`}
                        film={infoFilm}
                        cardInfo={infoFilm}
                    />
                );
            })}
        </ul>
    );
}
export default List;
