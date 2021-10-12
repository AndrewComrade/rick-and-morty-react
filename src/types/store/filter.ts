import { IOption } from '../IOption';
import { IFilterData } from '../IFilterData';

export interface FilterState {
    statusOptions: IOption[];
    genderOptions: IOption[];
    filterData: IFilterData;
}

export enum FilterActionEnum {
    SET_FILTER_DATA = 'SET_FILTER_DATA',
}

export type SetFilterDataAction = {
    type: FilterActionEnum.SET_FILTER_DATA;
    payload: IFilterData;
};

export type FilterAction = SetFilterDataAction;
