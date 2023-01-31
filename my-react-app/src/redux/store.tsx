import { combineReducers, createStore } from 'redux';
import { paginateReducer } from './paginate';
import { reducer } from './reducer';

const reducers = combineReducers({
    reducer,
    paginateReducer,
});
const store = createStore(reducers);

export { store };
