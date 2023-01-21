import React, { useContext } from 'react';
import './Pagination.css';
import Context from './../assets/js/Context';
let numberCards = 10;
let indexStart = 0;
let step = 10;
let activePage = 1;
function Pagination() {
    const listFilms = useContext(Context);
    const allPages = parseInt(listFilms.films.length / 10);

    const nextPage = () => {
        if (numberCards <= listFilms.films.length) {
            let start = (indexStart += step);
            let number = (numberCards += step);
            let newList = [...listFilms.films].slice(start, number);
            listFilms.useSetList(newList);
            activePage += 1;
        }
    };
    const prevPage = () => {
        if (activePage > 1) {
            let start = (indexStart -= step);
            let number = (numberCards -= step);
            let newList = [...listFilms.films].slice(start, number);
            listFilms.useSetList(newList);
            activePage -= 1;
        } else {
            return;
        }
    };
    return (
        <>
            <div className="pagination__btns">
                <button
                    onClick={() => {
                        prevPage();
                    }}
                >
                    Назад
                </button>
                <button
                    onClick={() => {
                        nextPage();
                    }}
                >
                    Вперед
                </button>
            </div>
            <div className="pagination__pages">
                <span className="active__page">{activePage}</span>of{' '}
                <div className="all__pages">{allPages}</div>
            </div>
        </>
    );
}
export default Pagination;
