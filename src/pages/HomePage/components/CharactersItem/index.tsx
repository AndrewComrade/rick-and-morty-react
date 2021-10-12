import React, { FC } from 'react';

import styles from './index.module.scss';

import { ICharacter } from '../../../../types/ICharacter';

import { capitalize } from '../../../../utils/capitalize';

interface CharactersItemProps {
    readonly character: ICharacter;
    readonly onClick: (id: number) => void;
}

const CharactersItem: FC<CharactersItemProps> = ({ character, onClick }) => {
    return (
        <div className={styles.CharacterItem}>
            <div className={styles.CharacterItem_ImageWrapper}>
                <img
                    className={styles.CharacterItem_Image}
                    src={character.image}
                    alt={character.name}
                />
            </div>
            <div className={styles.CharacterItem_InfoWrapper}>
                <h4 className={styles.CharacterItem_Name}>{character.name}</h4>
                <span className={styles.CharacterItem_InfoText}>
                    {capitalize(character.status)} - {character.species}
                </span>
                <span className={styles.CharacterItem_InfoText}>
                    Gender: {character.gender}
                </span>
                <span className={styles.CharacterItem_InfoText}>
                    Type: {character.type ? character.type : 'No info'}
                </span>
                <div className={styles.CharacterItem_Actions}>
                    <button
                        className={styles.CharacterItem_Btn}
                        onClick={() => onClick(character.id)}
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CharactersItem;
