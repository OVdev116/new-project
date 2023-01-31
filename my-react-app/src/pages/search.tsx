import React from 'react';
import { useSelector } from 'react-redux';
import { GenresForm } from '../Components/genres-form';
import { PopularSelect } from '../Components/popular-select';
import { YearSelect } from '../Components/year-select';
import { data } from '../shared/types';

function Search() {
    const store = useSelector((store: data) => store.reducer.currentListFilms);

    return (
        <>
            <GenresForm />
            <PopularSelect />
            <YearSelect />

            {/* <Card
                key={`${Number(infoFilm.id)}`}
                film={infoFilm}
                cardInfo={infoFilm}
            /> */}
        </>
    );
}
export { Search };
