import {
    FilterActionEnum,
    SetFilterDataAction,
} from '../../types/store/filter';
import { IFilterData } from '../../types/IFilterData';

export const FilterActionCreators = {
    setFilterData: (data: IFilterData): SetFilterDataAction => ({
        type: FilterActionEnum.SET_FILTER_DATA,
        payload: data,
    }),
};
