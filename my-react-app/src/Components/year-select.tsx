import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { data } from '../shared/types';
import { yearsList } from '../shared/variables';

function YearSelect() {
    const dispatch = useDispatch();
    const store = useSelector((store: data) => store.reducer);

    const sortingYear = (option: string | number) => {
        dispatch({ type: 'PAGINATION', payload: 1 });
        dispatch({ type: 'SORTING_YEAR', payload: +option });
        if (store.genres.length !== 0) {
            dispatch({ type: 'SORTING_YEAR', payload: +option });
            dispatch({ type: 'CHECKED_GENRE', payload: store.genres });
        }
    };
    return (
        <select
            name=""
            id=""
            onChange={(e) => {
                sortingYear(e.target.value);
            }}
        >
            {yearsList.map((item, index) => (
                <option key={`${index}_${item.year}`} value={item.year}>
                    {item.year}
                </option>
            ))}
        </select>
    );
}
export { YearSelect };
