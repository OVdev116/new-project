import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../Components/Filter';
import List from '../Components/List';
import Pagination from '../Components/Pagination';
import { data } from '../shared/types';
import { perPage } from '../shared/variables';

function Home() {
    const dispatch = useDispatch();
    const store = useSelector((store) => store.reducer);
    const paginateStore = useSelector((store) => store.paginateReducer);
    const lastIndex = paginateStore.currentPage * perPage;
    const firstIndex = lastIndex - perPage;
    const current = { ...store }.currentListFilms.slice(firstIndex, lastIndex);
    const total = store.currentListFilms.length;
    paginateStore.arr = current;
    const paginate = (pageNumber: number) => {
        dispatch({ type: 'PAGINATION', payload: pageNumber });
    };
    return (
        <div className="content">
            <Filter />
            {paginateStore.arr.length !== 0 ? (
                <List filmList={paginateStore.arr} />
            ) : (
                'Ничего не найдено'
            )}
            <Pagination paginate={paginate} total={total} />
        </div>
    );
}
export default Home;
