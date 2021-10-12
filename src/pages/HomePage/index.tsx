import React, { FC, useEffect } from 'react';

import styles from './index.module.scss';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import Filter from '../../components/Filter';
import CharactersList from './components/CharactersList';
import PaginationComponent from '../../components/Pagination';
import Modal from '../../components/Modal';
import {ICharacter} from "../../types/ICharacter";

const HomePage: FC = () => {
    const { fetchCharacters, setCurrentPage, setIsModalOpen, setSelectedCharacter } = useActions();

    const {
        characters,
        pagesCount,
        isLoading,
        error,
        currentPage,
        isModalOpen,
        selectedCharacter,
    } = useTypedSelector((state) => state.characters);
    const { filterData } = useTypedSelector((state) => state.filter);

    useEffect(() => {
        fetchCharacters({ ...filterData, page: currentPage });
    }, [currentPage, filterData]);

    const onPageChange = (currentPage: number) => {
        setCurrentPage(currentPage);
    };

    const onModalClose = () => {
        setIsModalOpen(false);
        setSelectedCharacter({} as ICharacter)
    };

    return (
        <div className={styles.HomePage_Container}>
            {isModalOpen && (
                <Modal character={selectedCharacter} onClose={onModalClose} />
            )}
            <div className={styles.HomePage_ContentWrapper}>
                <div className={styles.HomePage_ContentItem}>
                    <Filter />
                </div>
                <div className={styles.HomePage_ContentItem}>
                    {isLoading && <h1>Loading...</h1>}
                    {error && <h1>{error}</h1>}
                    {!isLoading && !error && (
                        <CharactersList characters={characters} />
                    )}
                </div>
            </div>
            <div className={styles.HomePage_Footer}>
                {!error && (
                    <PaginationComponent
                        currentPage={currentPage}
                        totalPages={pagesCount}
                        onPageChange={onPageChange}
                    />
                )}
            </div>
        </div>
    );
};

export default HomePage;
