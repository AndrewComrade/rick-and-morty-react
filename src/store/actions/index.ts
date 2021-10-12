import { CharactersActionCreators } from './charactersActions';
import { FilterActionCreators } from './filterActions';

export const allActionCreators = {
    ...CharactersActionCreators,
    ...FilterActionCreators,
};
