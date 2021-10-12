import React, { FC } from 'react';

import styles from './index.module.scss';

import { useActions } from '../../../../hooks/useActions';

import { ICharacter } from '../../../../types/ICharacter';

import CharactersItem from '../CharactersItem';

interface CharactersListProps {
    readonly characters: ICharacter[];
}

const CharactersList: FC<CharactersListProps> = ({ characters }) => {
    const { fetchSingleCharacter, setIsModalOpen } = useActions();

    const onCharacterView = (id: number) => {
        fetchSingleCharacter(id);
        setIsModalOpen(true);
    };

    return (
        <div className={styles.CharactersList}>
            {characters.map((character) => (
                <CharactersItem
                    key={character.id}
                    character={character}
                    onClick={onCharacterView}
                />
            ))}
        </div>
    );
};

export default CharactersList;
