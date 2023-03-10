import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Card.css';
// import Page from './page';

const nameStorage = 'favorites';
const watchLater = 'watchLater';
// const arrayCardsId = JSON.parse(localStorage.getItem(nameStorage)) || [];
// const arraywatchLater = JSON.parse(localStorage.getItem(watchLater)) || [];
export function Card({ film, cardInfo }) {
    // {`https://image.tmdb.org/t/p/w500/${film.poster}`}
    const dispatch = useDispatch();
    return (
        <div className="card">
            <div className="">
                <img src="../../src/assets/img/300x450.webp" alt="" />
            </div>
            <div className="card__content">
                <div className="card__head">
                    Рейтинг
                    <span className="raiting">{film.raiting}</span>
                    <div
                        className="star"
                        onClick={() => {
                            dispatch({
                                type: 'FAVORITES_LIST',
                                payload: { id: cardInfo },
                            });
                        }}
                    >
                        <svg
                            enableBackground="new 0 0 32 32"
                            height="32px"
                            id="Layer_1"
                            version="1.1"
                            viewBox="0 0 32 32"
                            width="32px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M31.881,12.557c-0.277-0.799-0.988-1.384-1.844-1.511l-8.326-1.238l-3.619-7.514  C17.711,1.505,16.896,1,16,1c-0.896,0-1.711,0.505-2.092,1.294l-3.619,7.514l-8.327,1.238c-0.855,0.127-1.566,0.712-1.842,1.511  c-0.275,0.801-0.067,1.683,0.537,2.285l6.102,6.092l-1.415,8.451C5.2,30.236,5.569,31.09,6.292,31.588  C6.689,31.861,7.156,32,7.623,32c0.384,0,0.769-0.094,1.118-0.281L16,27.811l7.26,3.908C23.609,31.906,23.994,32,24.377,32  c0.467,0,0.934-0.139,1.332-0.412c0.723-0.498,1.09-1.352,0.947-2.203l-1.416-8.451l6.104-6.092  C31.947,14.239,32.154,13.357,31.881,12.557z M23.588,19.363c-0.512,0.51-0.744,1.229-0.627,1.934l1.416,8.451l-7.26-3.906  c-0.348-0.188-0.732-0.281-1.118-0.281c-0.384,0-0.769,0.094-1.117,0.281l-7.26,3.906l1.416-8.451  c0.118-0.705-0.114-1.424-0.626-1.934l-6.102-6.092l8.326-1.24c0.761-0.113,1.416-0.589,1.743-1.268L16,3.251l3.62,7.513  c0.328,0.679,0.982,1.154,1.742,1.268l8.328,1.24L23.588,19.363z"
                                fill="#333333"
                                id="star"
                            />
                        </svg>
                    </div>
                    <div
                        className="bookmark"
                        onClick={() => {
                            // saveLocalStorage(
                            //     arraywatchLater,
                            //     cardInfo,
                            //     watchLater
                            // );
                        }}
                    >
                        <svg
                            viewBox="0 0 512 512"
                            width="32px"
                            height="32px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title />
                            <g data-name="1" id="_1">
                                <path d="M393,450a14.92,14.92,0,0,1-7.46-2L257,374.29,128.46,448A15,15,0,0,1,106,435V63a15,15,0,0,1,15-15H393a15,15,0,0,1,15,15V435a15,15,0,0,1-15,15ZM257,342a14.92,14.92,0,0,1,7.46,2L378,409.1V78H136V409.1L249.54,344A14.92,14.92,0,0,1,257,342Z" />
                            </g>
                        </svg>
                    </div>
                </div>

                <div className="name">{film.title}</div>
                <Link to={`/card/${cardInfo.id}`}>Подробнее</Link>

                {/* <a className="link">Подробнее</a> */}
            </div>
        </div>
    );
}
