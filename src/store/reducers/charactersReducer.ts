import {
    CharactersAction,
    CharactersActionEnum,
    CharacterState,
} from '../../types/store/characters';

const initialState: CharacterState = {
    isLoading: false,
    error: '',
    characters: [],
    pagesCount: 0,
    currentPage: 1,
    isModalOpen: false,
};

const charactersReducer = (
    state = initialState,
    action: CharactersAction
): CharacterState => {
    switch (action.type) {
        case CharactersActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        case CharactersActionEnum.SET_ERROR:
            return { ...state, error: action.payload };
        case CharactersActionEnum.SET_CHARACTERS:
            return { ...state, characters: action.payload };
        case CharactersActionEnum.SET_PAGES_COUNT:
            return { ...state, pagesCount: action.payload };
        case CharactersActionEnum.SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload };
        case CharactersActionEnum.SET_IS_MODAL_OPEN:
            return { ...state, isModalOpen: action.payload };
        case CharactersActionEnum.SET_SELECTED_CHARACTER:
            return { ...state, selectedCharacter: action.payload };
        default:
            return state;
    }
};

export default charactersReducer;
