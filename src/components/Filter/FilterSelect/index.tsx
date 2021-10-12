import React, { FC } from 'react';
import Select from 'react-select';

import { IOption } from '../../../types/IOption';

interface FilterSelectProps {
    readonly options: IOption[];
    readonly value: IOption;
    readonly name?: string;
    readonly onChange: (option: IOption | null) => void;
}

const FilterSelect: FC<FilterSelectProps> = ({
    options,
    onChange,
    value,
    name,
}) => {
    return (
        <>
            {name && <span>{name}</span>}
            <Select
                value={!!value.value ? value : options[0]}
                options={options}
                defaultValue={options[0]}
                isSearchable={false}
                onChange={onChange}
            />
        </>
    );
};

export default FilterSelect;
