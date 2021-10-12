import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    characters: charactersReducer,
    filter: filterReducer,
});

export default rootReducer;
