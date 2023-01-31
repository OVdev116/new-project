import React from 'react';
import { useParams } from 'react-router-dom';
import { films } from '../films';
import './PageCard.css';

function PageCard() {
    const { id } = useParams();
    return films.map((item) => {
        if (item.id === Number(id)) {
            const infoFilm = {
                original_title: item.original_title,
                title: item.title,
                raiting: item.vote_average,
                poster: item.poster_path || item.backdrop_path,
                overview: item.overview,
                release_date: item.release_date,
                original_language: item.original_language,
            };

            return (
                <div className="card__item">
                    <div className="">
                        <div className="card__item-img">
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${infoFilm.poster}`}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="card__item-info">
                        <h2>{infoFilm.title}</h2>
                        <div className="card__item-stroke">
                            Оригинал заголовка: {infoFilm.original_title}
                        </div>
                        <div className="card__item-raiting card__item-stroke">
                            Рейтинг
                            <span className="raiting">{infoFilm.raiting}</span>
                        </div>
                        <div className="card__item-stroke">
                            Дата выхода: {infoFilm.release_date}
                        </div>
                        <div className="card__item-stroke">
                            Язык оригинала: {infoFilm.original_language}
                        </div>
                        <div className="card__item-stroke">
                            Язык оригинала: {infoFilm.original_language}
                        </div>
                        <div className="card__item-text">
                            {infoFilm.overview}
                        </div>
                    </div>
                </div>
            );
        }
    });
}
export default PageCard;
