import React from 'react';
import { useDispatch } from 'react-redux';
import { sortingList } from '../shared/variables';

function PopularSelect() {
    const dispatch = useDispatch();

    const sorting = (option: string) => {
        dispatch({ type: 'SORTING_POPULAR', payload: option });
    };
    return (
        <select
            name=""
            id=""
            onChange={(e) => {
                sorting(e.target.value);
            }}
        >
            {sortingList.map((item, index) => (
                <option
                    key={`${index}_${item.sortProperty}`}
                    value={item.sortProperty}
                >
                    {item.name}
                </option>
            ))}
        </select>
    );
}
export { PopularSelect };
