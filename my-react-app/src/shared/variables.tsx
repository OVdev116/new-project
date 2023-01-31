import { films } from '../films';

const sortingList = [
    {
        name: 'Популярные по убыванию',
        sortProperty: 'popularity_low',
    },
    {
        name: 'Популярные по возрастанию',
        sortProperty: 'popularity_hight',
    },
    {
        name: 'Рейтинг по убыванию',
        sortProperty: 'raiting_low',
    },
    {
        name: 'Рейтинг по возрастанию',
        sortProperty: 'raiting_hight',
    },
];
const yearsList = [
    { year: 2020 },
    { year: 2019 },
    { year: 2018 },
    { year: 2017 },
];
const favoriteName = 'favorites';
const arrayFavorites = JSON.parse(localStorage.getItem(favoriteName) || '[]');
const data = {
    initListFilms: films,
    currentListFilms: films,
    search: films,
    sortBy: '',
    genres: [],
    year: '',
    favorites: arrayFavorites,
    open: false,
};
const perPage = 12;
export { sortingList, yearsList, data, favoriteName, arrayFavorites, perPage };
