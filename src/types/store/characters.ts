import { ICharacter } from '../ICharacter';

export interface CharacterState {
    isLoading: boolean;
    error: string;
    characters: ICharacter[];
    pagesCount: number;
    currentPage: number;
    isModalOpen: boolean;
    selectedCharacter?: ICharacter;
}

export enum CharactersActionEnum {
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
    SET_CHARACTERS = 'SET_CHARACTERS',
    SET_PAGES_COUNT = 'SET_PAGES_COUNT',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_SELECTED_CHARACTER = 'SET_SELECTED_CHARACTER',
    SET_IS_MODAL_OPEN = 'SET_IS_MODAL_OPEN',
}

export type SetIsLoadingAction = {
    type: CharactersActionEnum.SET_IS_LOADING;
    payload: boolean;
};

export type SetErrorAction = {
    type: CharactersActionEnum.SET_ERROR;
    payload: string;
};

export type SetCharactersAction = {
    type: CharactersActionEnum.SET_CHARACTERS;
    payload: ICharacter[];
};

export type SetPagesCountAction = {
    type: CharactersActionEnum.SET_PAGES_COUNT;
    payload: number;
};

export type SetCurrentPageAction = {
    type: CharactersActionEnum.SET_CURRENT_PAGE;
    payload: number;
};

export type SetIsModalOpenAction = {
    type: CharactersActionEnum.SET_IS_MODAL_OPEN;
    payload: boolean;
};

export type SetSelectedCharacter = {
    type: CharactersActionEnum.SET_SELECTED_CHARACTER;
    payload: ICharacter;
};

export type CharactersAction =
    | SetCharactersAction
    | SetIsLoadingAction
    | SetErrorAction
    | SetPagesCountAction
    | SetCurrentPageAction
    | SetIsModalOpenAction
    | SetSelectedCharacter;
