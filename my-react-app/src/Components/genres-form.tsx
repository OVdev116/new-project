import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { genre } from '../genre';
import { data } from '../shared/types';

const checkedGenreList: any = [];
function GenresForm() {
    const dispatch = useDispatch();
    const store = useSelector((store: data) => store.reducer);
    const pagination = useSelector((store: data) => store.paginateReducer);
    const checkedGenre = (value: []) => {
        dispatch({ type: 'CHECKED_GENRE', payload: value });
        if (store.year) {
            dispatch({ type: 'SORTING_YEAR', payload: store.year });
        }
        if (value.length !== 0) {
            dispatch({ type: 'CHECKED_GENRE', payload: value });
        }
        dispatch({ type: 'PAGINATION', payload: 1 });
    };
    return genre.map((item) => (
        <div className="form__input" key={item.id}>
            <input
                type="checkbox"
                id={String(item.id)}
                value={item.id}
                onChange={(e) => {
                    if (e.target.checked) {
                        checkedGenreList.push(Number(e.target.value)),
                            checkedGenre(checkedGenreList);
                    } else if (!e.target.checked) {
                        if (checkedGenreList.includes(+e.target.value)) {
                            checkedGenreList.splice(
                                checkedGenreList.indexOf(+e.target.value),
                                1
                            );
                            checkedGenre(checkedGenreList);
                        }
                    }
                }}
            />
            <label htmlFor={String(item.id)} /> {item.name}
        </div>
    ));
}
export { GenresForm };
