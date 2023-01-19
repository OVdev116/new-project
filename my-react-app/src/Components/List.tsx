import React from 'react';
import { Card } from './Card';
import { films } from '../films';
import './List.css';

function List() {
    return (
        <ul className="list">
            {films.map((item) => {
                const infoFilm = {
                    title: item.title,
                    raiting: item.vote_average,
                    poster: item.poster_path,
                };

                return <Card key={item.id} film={infoFilm} />;
            })}
        </ul>
    );
}
export default List;
