import React, { FC } from 'react';

import styles from './index.module.scss';
import { ICharacter } from '../../types/ICharacter';

interface ModalProps {
    readonly character?: ICharacter;
    readonly onClose: () => void;
}

const Modal: FC<ModalProps> = ({ character, onClose }) => {
    return (
        <div className={styles.Modal_Wrapper} onClick={onClose}>
            <div
                className={styles.Modal_Body}
                onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                    e.stopPropagation()
                }
            >
                <button className={styles.Modal_CloseBtn} onClick={onClose} />
                <h4 className={styles.Modal_Title}>{character?.name}</h4>
                <div className={styles.Modal_ImageWrapper}>
                    <img
                        className={styles.Modal_Image}
                        src={character?.image}
                        alt={character?.name}
                    />
                </div>
                <ul className={styles.Modal_InfoList}>
                    <li className={styles.Modal_InfoList_Item}>
                        <span>ID: </span>
                        <span>{character?.id}</span>
                    </li>
                    <li className={styles.Modal_InfoList_Item}>
                        <span>Status: </span>
                        <span>{character?.status}</span>
                    </li>
                    <li className={styles.Modal_InfoList_Item}>
                        <span>Gender: </span>
                        <span>{character?.gender}</span>
                    </li>
                    <li className={styles.Modal_InfoList_Item}>
                        <span>Species: </span>
                        <span>{character?.species}</span>
                    </li>
                    <li className={styles.Modal_InfoList_Item}>
                        <span>Type: </span>
                        <span>
                            {character?.type ? character.type : 'No info'}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Modal;
