import {
    FilterAction,
    FilterActionEnum,
    FilterState,
} from '../../types/store/filter';

const initialState: FilterState = {
    genderOptions: [
        { value: 'All', label: 'All' },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Unknown', label: 'Unknown' },
        { value: 'Genderless ', label: 'Genderless' },
    ],
    statusOptions: [
        { value: 'All', label: 'All' },
        { value: 'Alive', label: 'Alive' },
        { value: 'Dead', label: 'Dead' },
        { value: 'Unknown', label: 'Unknown' },
    ],
    filterData: {
        type: '',
        name: '',
        species: '',
        status: '',
        gender: '',
    },
};

const filterReducer = (
    state = initialState,
    action: FilterAction
): FilterState => {
    switch (action.type) {
        case FilterActionEnum.SET_FILTER_DATA:
            return { ...state, filterData: action.payload };
        default:
            return state;
    }
};

export default filterReducer;
