import { perPage } from '../shared/variables';

const defaultPagination = {
    currentPage: 1,
    arr: [],
};
function paginateReducer(state = defaultPagination, action: any) {
    switch (action.type) {
        case 'PAGINATION':
            return { ...state, currentPage: action.payload };

        default:
            return state;
    }
}

export { paginateReducer };
