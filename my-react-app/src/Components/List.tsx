import React, { useContext } from 'react';
import { Card } from './Card';
import './List.css';
import Context from './../assets/js/Context';

function List() {
    const listFilms = useContext(Context);
    return (
        <ul className="list">
            {listFilms.setList.map((item) => {
                const infoFilm = {
                    title: item.title,
                    raiting: item.vote_average,
                    poster: item.poster_path || item.backdrop_path,
                };

                return <Card key={item.id} film={infoFilm} />;
            })}
        </ul>
    );
}
export default List;
