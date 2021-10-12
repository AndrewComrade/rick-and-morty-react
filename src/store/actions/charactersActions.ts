import {
    CharactersActionEnum,
    SetCharactersAction,
    SetCurrentPageAction,
    SetErrorAction,
    SetIsLoadingAction,
    SetIsModalOpenAction,
    SetPagesCountAction,
    SetSelectedCharacter,
} from '../../types/store/characters';
import { AppDispatch } from '../index';
import { ICharacter } from '../../types/ICharacter';
import { IQueryParams } from '../../types/IQueryParams';

import CharactersService from '../../api/CharactersService';

export const CharactersActionCreators = {
    setCharacters: (characters: ICharacter[]): SetCharactersAction => ({
        type: CharactersActionEnum.SET_CHARACTERS,
        payload: characters,
    }),
    setSelectedCharacter: (character: ICharacter): SetSelectedCharacter => ({
        type: CharactersActionEnum.SET_SELECTED_CHARACTER,
        payload: character,
    }),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
        type: CharactersActionEnum.SET_IS_LOADING,
        payload: isLoading,
    }),
    setError: (error: string): SetErrorAction => ({
        type: CharactersActionEnum.SET_ERROR,
        payload: error,
    }),
    setPagesCount: (count: number): SetPagesCountAction => ({
        type: CharactersActionEnum.SET_PAGES_COUNT,
        payload: count,
    }),
    setCurrentPage: (page: number): SetCurrentPageAction => ({
        type: CharactersActionEnum.SET_CURRENT_PAGE,
        payload: page,
    }),
    setIsModalOpen: (isOpen: boolean): SetIsModalOpenAction => ({
        type: CharactersActionEnum.SET_IS_MODAL_OPEN,
        payload: isOpen,
    }),
    fetchCharacters:
        (queryParams: IQueryParams = { page: 1 }) =>
        async (dispatch: AppDispatch) => {
            try {
                dispatch(CharactersActionCreators.setIsLoading(true));
                dispatch(CharactersActionCreators.setError(''));

                const response = await CharactersService.getCharacters(
                    queryParams
                );

                dispatch(
                    CharactersActionCreators.setPagesCount(
                        response.data.info.pages
                    )
                );
                dispatch(
                    CharactersActionCreators.setCharacters(
                        response.data.results
                    )
                );
            } catch (e) {
                dispatch(CharactersActionCreators.setError('Nothing found'));
            } finally {
                dispatch(CharactersActionCreators.setIsLoading(false));
            }
        },
    fetchSingleCharacter: (id: number) => async (dispatch: AppDispatch) => {
        try {
            const response = await CharactersService.getSingleCharacter(id);
            dispatch(
                CharactersActionCreators.setSelectedCharacter(response.data)
            );
        } catch (e) {
            console.log(e);
        }
    },
};
