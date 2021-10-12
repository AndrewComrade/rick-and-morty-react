import React, { FC, useState } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

import { IOption } from '../../types/IOption';
import { IFilterData } from '../../types/IFilterData';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import FilterSelect from './FilterSelect';
import FilterInput from './FilterInput';

const Filter: FC = () => {
    const { statusOptions, genderOptions } = useTypedSelector(
        (state) => state.filter
    );

    const { setFilterData, setCurrentPage } = useActions();

    const [name, setName] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [species, setSpecies] = useState<string>('');
    const [type, setType] = useState<string>('');

    const onStatusChange = (option: IOption | null) => {
        !!option?.value && setStatus(option.value);
    };

    const onGenderChange = (option: IOption | null) => {
        !!option?.value && setGender(option.value);
    };

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setType(e.target.value);
    };

    const onSpeciesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSpecies(e.target.value);
    };

    const onClearFilter = () => {
        setStatus('');
        setGender('');
        setName('');
        setType('');
        setSpecies('');
        setFilterData({} as IFilterData);
    };

    const onApplyFilter = () => {
        setCurrentPage(1);
        setFilterData({ name, species, type, gender, status });
    };

    return (
        <div className={styles.Filter}>
            <div className={styles.Filter_Header}>
                <h5 className={styles.Filter_Title}>Characters filter</h5>
            </div>
            <div className={styles.Filter_Body}>
                <div className={styles.Filter_Item}>
                    <FilterSelect
                        options={statusOptions}
                        onChange={onStatusChange}
                        value={{ value: status, label: status }}
                        name="Status"
                    />
                </div>
                <div className={styles.Filter_Item}>
                    <FilterSelect
                        options={genderOptions}
                        onChange={onGenderChange}
                        value={{ value: gender, label: gender }}
                        name="Gender"
                    />
                </div>
                <div className={styles.Filter_Item}>
                    <FilterInput
                        value={name}
                        onChange={onNameChange}
                        label="Name"
                        placeholder="Enter part of name"
                    />
                </div>
                <div className={styles.Filter_Item}>
                    <FilterInput
                        value={type}
                        onChange={onTypeChange}
                        label="Type"
                        placeholder="Enter part of type"
                    />
                </div>
                <div className={styles.Filter_Item}>
                    <FilterInput
                        value={species}
                        onChange={onSpeciesChange}
                        label="Species"
                        placeholder="Enter part of species"
                    />
                </div>
            </div>
            <div className={styles.Filter_Actions}>
                <button
                    className={classNames(
                        styles.Filter_Btn,
                        styles.Filter_Btn_Apply
                    )}
                    onClick={onApplyFilter}
                >
                    Apply
                </button>
                <button
                    className={classNames(
                        styles.Filter_Btn,
                        styles.Filter_Btn_Clear
                    )}
                    onClick={onClearFilter}
                >
                    Clear All
                </button>
            </div>
        </div>
    );
};

export default Filter;
