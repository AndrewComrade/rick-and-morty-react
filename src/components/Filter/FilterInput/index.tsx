import React, { FC } from 'react';

import styles from './index.module.scss';

interface FilterInputProps {
    readonly label?: string;
    readonly placeholder?: string;
    readonly value: string;
    readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterInput: FC<FilterInputProps> = ({
    label,
    value,
    placeholder,
    onChange,
}) => {
    return (
        <div className={styles.FilterInput_Wrapper}>
            <label>
                {!!label && (
                    <span className={styles.FilterInput_Label}>{label}</span>
                )}
                <input
                    className={styles.FilterInput}
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </label>
        </div>
    );
};

export default FilterInput;
