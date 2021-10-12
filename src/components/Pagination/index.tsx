import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

export interface PaginationProps {
    readonly currentPage: number;
    readonly totalPages: number;
    readonly onPageChange: (currentPage: number) => void;
}

export const PaginationComponent: FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    if (totalPages === 1) {
        return null;
    }

    return (
        <div className={styles.Pagination_Wrapper}>
            {currentPage !== 1 && (
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    type="button"
                    className={classNames(
                        styles.Pagination_Item,
                        styles.Pagination_Nav
                    )}
                >
                    &lt;
                </button>
            )}
            <button
                onClick={() => onPageChange(1)}
                type="button"
                className={classNames(styles.Pagination_Item, {
                    [styles.Pagination_Item_Active]: currentPage === 1,
                })}
            >
                {1}
            </button>

            {currentPage > 3 && (
                <div className={styles.Pagination_Separator}>...</div>
            )}

            {currentPage === totalPages && totalPages > 3 && (
                <button
                    onClick={() => onPageChange(currentPage - 2)}
                    type="button"
                    className={styles.Pagination_Item}
                >
                    {currentPage - 2}
                </button>
            )}
            {currentPage > 2 && (
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    type="button"
                    className={styles.Pagination_Item}
                >
                    {currentPage - 1}
                </button>
            )}
            {currentPage !== 1 && currentPage !== totalPages && (
                <button
                    onClick={() => onPageChange(currentPage)}
                    type="button"
                    className={classNames(
                        styles.Pagination_Item,
                        styles.Pagination_Item_Active
                    )}
                >
                    {currentPage}
                </button>
            )}
            {currentPage < totalPages - 1 && (
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    type="button"
                    className={styles.Pagination_Item}
                >
                    {currentPage + 1}
                </button>
            )}
            {currentPage === 1 && totalPages > 3 && (
                <button
                    onClick={() => onPageChange(currentPage + 2)}
                    type="button"
                    className={styles.Pagination_Item}
                >
                    {currentPage + 2}
                </button>
            )}

            {currentPage < totalPages - 2 && (
                <div className={styles.Pagination_Separator}>...</div>
            )}

            <button
                onClick={() => onPageChange(totalPages)}
                type="button"
                className={classNames(styles.Pagination_Item, {
                    [styles.Pagination_Item_Active]: currentPage === totalPages,
                })}
            >
                {totalPages}
            </button>
            {currentPage !== totalPages && (
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    type="button"
                    className={classNames(
                        styles.Pagination_Item,
                        styles.Pagination_Nav
                    )}
                >
                    &gt;
                </button>
            )}
        </div>
    );
};

export default PaginationComponent;
