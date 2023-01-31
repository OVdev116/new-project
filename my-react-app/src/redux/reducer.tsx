import { item } from '../shared/types';
import { data, favoriteName } from '../shared/variables';

function reducer(state = data, action: any) {
    switch (action.type) {
        case 'SORTING_YEAR':
            const arr = { ...state }.initListFilms;
            const newArr: [] = [];
            arr.filter((item): void => {
                if (
                    new Date(item.release_date).getFullYear() === action.payload
                ) {
                    newArr.push(item);
                }
            });

            return { ...state, currentListFilms: newArr, year: action.payload };
        case 'CHECKED_GENRE':
            const Arr: item[] = [];
            const initial: any[] = state.year
                ? { ...state }.currentListFilms
                : { ...state }.initListFilms;

            initial.filter((item: item) => {
                item.genre_ids.forEach((element: number) => {
                    if (action.payload.includes(element)) {
                        Arr.push(item);
                    }
                });
            });
            const newSet = new Set(Arr);
            return {
                ...state,
                currentListFilms:
                    action.payload.length !== 0
                        ? Array.from(newSet)
                        : state.initListFilms,
                genres: action.payload,
            };

        case 'SORTING_POPULAR': {
            const arr = { ...state }.currentListFilms;
            switch (action.payload) {
                case 'popularity_low':
                    arr.sort((a, b) => b.popularity - a.popularity);
                    break;
                case 'popularity_hight':
                    arr.sort((a, b) => a.popularity - b.popularity);
                    break;
                case 'raiting_low':
                    arr.sort((a, b) => b.vote_average - a.vote_average);
                    break;
                case 'raiting_hight':
                    arr.sort((a, b) => a.vote_average - b.vote_average);
                    break;
                default:
                    break;
            }

            return {
                ...state,
                currentListFilms: arr,
                sortBy: action.payload,
            };
        }
        // case 'RESET_GENRES':
        //     return { ...state, genres: action.payload };

        case 'FAVORITES_LIST':
            const newStateFavorite = { ...state }.favorites;
            newStateFavorite.push(action.payload.id);
            const newArrList = new Set(newStateFavorite);
            localStorage.setItem(
                favoriteName,
                JSON.stringify(Array.from(newArrList))
            );
            return {
                ...state,
                favorites: Array.from(newArrList),
            };
        // case 'OPEN_POPUP':
        //     return { ...state, open: true };

        // case 'FILTER_FAVORITES_LIST':
        //     const oldArr = { ...state };
        //     const favArr = [];
        //     oldArr.initListFilms.forEach((item) => {
        //         oldArr.favorites.filter((element) => {
        //             if (item.id === element) {
        //                 favArr.push(item);
        //             }
        //         });
        //     });
        //     return { ...state, favorites: favArr };
        default:
            return state;
    }
}

export { reducer, type data, type item };
