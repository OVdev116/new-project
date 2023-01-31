import React from 'react';
import { useSelector } from 'react-redux';
import List from '../Components/List';
import { data } from '../shared/types';

function FavoritesList() {
    const store = useSelector((store: data) => store.reducer);
    return store.favorites.length !== 0 ? (
        <List filmList={store.favorites} />
    ) : (
        <div className="">Ничего не добавлено</div>
    );
}
export { FavoritesList };
